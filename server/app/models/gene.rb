class Gene < ActiveRecord::Base
  include Moderated
  include Subscribable
  include Flaggable
  include Commentable
  include WithTimepointCounts

  has_many :variants
  has_many :assertions
  has_many :variant_groups
  has_and_belongs_to_many :sources
  has_and_belongs_to_many :gene_aliases

  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

  searchkick highlight: [:symbol, :aliases]
  scope :search_import, -> { includes(:gene_aliases) }

  def search_data
    {
      name: name,
      aliases: gene_aliases.map(&:name)
    }
  end

  def self.timepoint_query
    ->(x) {
      self.joins(variants: [:evidence_items])
        .group('genes.id')
        .select('genes.id')
        .where("evidence_items.status != 'rejected'")
        .having('MIN(evidence_items.created_at) >= ?', x)
        .distinct
        .count
    }
  end
end