class UpdateVariantGroupBrowseTableRowsToVersion2 < ActiveRecord::Migration[6.1]
  def change
    update_view :variant_group_browse_table_rows, version: 2, revert_to_version: 1, materialized: true
  end
end