class Drug < ActiveRecord::Base
  has_and_belongs_to_many :evidence_items

  def drug_url
    if ncit_id.nil?
      nil
    else
      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&ns=ncit&code=#{ncit_id}"
    end
  end
end