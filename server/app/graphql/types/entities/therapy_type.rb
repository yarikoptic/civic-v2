module Types::Entities
  class TherapyType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :ncit_id, String, null: true
    field :therapy_url, String, null: true
    field :therapy_aliases, [String], null: false
    field :link, String, null: false

    def therapy_aliases
      Loaders::AssociationLoader.for(Therapy, :therapy_aliases).load(object).then do |therapy_aliases|
        therapy_aliases.map{|a| a.name}.sort
      end
    end

    def therapy_url
      Therapy.url_for(ncit_id: object.ncit_id)
    end
  end
end