require 'set'

module Actions
  class ExtractReferences
    include Actions::Transactional
    attr_reader :referenced_items, :input_segments, :scan_regex, :split_regex, :segments

    def initialize(input_segments)
      @input_segments = Array(input_segments)
      @referenced_items = Set.new
      @segments = []
    end

    private
    def execute
      @segments = find_matches.reject(&:blank?)
    end

    def find_matches
      input_segments.flat_map do |segment|
        if segment.is_a?(String)
          segment.split(self.class.split_regex).map do |split_segment|
            if match = split_segment.match(self.class.scan_regex)
              (klass, tag_type) = self.class.extract_type(match[:type])
              if referenced_item = klass.find_by(id: match[:id])
                referenced_items << referenced_item
                {
                  entity_id: referenced_item.id,
                  display_name: referenced_item.name,
                  tag_type: tag_type
                }
              else
                split_segment
              end
            else
              split_segment
            end
          end
        else
          segment
        end
      end
    end

    def self.typeahead_matches(query_term)
      if match = "##{query_term}".match(self.scan_regex)
        (klass, tag_type) = self.extract_type(match[:type])
        if referenced_items = klass.where("CAST(id as TEXT) LIKE ?", "#{match[:id]}%").order(:id).limit(10)
          return referenced_items.map do |referenced_item|
          {
            entity_id: referenced_item.id,
            display_name: referenced_item.name,
            tag_type: tag_type
          }
          end
        else
          return []
        end
      else
        return []
      end
    end

    def self.extract_type(type)
      case type.upcase
      when 'V'
        [Variant, 'VARIANT']
      when 'G'
        [Gene, 'GENE']
      when 'VG'
        [VariantGroup, 'VARIANT_GROUP']
      when 'E'
        [EvidenceItem, 'EVIDENCE_ITEM']
      when 'R'
        [Revision, 'REVISION']
      when 'A'
        [Assertion, 'ASSERTION']
      end
    end

    def self.split_regex
      @split_regex ||= Regexp.new(/\s*(#(?:a|v|g|vg|e|r)(?:id)?\d+)\b/i)
    end

    def self.scan_regex
      @scan_regex ||= Regexp.new(/#(?<type>a|v|g|vg|e|r)(?:id)?(?<id>\d+)\b/i)
    end
  end
end