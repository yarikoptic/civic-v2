module Features
  class Gene < ActiveRecord::Base
    include Subscribable
    include IsFeatureInstance

    #has_many :variants
    has_many :variant_groups
    has_many :source_suggestions
    #has_and_belongs_to_many :sources
    #has_and_belongs_to_many :gene_aliases

    has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

    searchkick highlight: [:symbol, :aliases], callbacks: :async
    scope :search_import, -> { includes(:gene_aliases) }

    def search_data
      {
        name: name,
        aliases: gene_aliases.map(&:name)
      }
    end

    def display_name
      name
    end

    def editable_fields
      [
        :description,
        :source_ids
      ]
    end
  end
end