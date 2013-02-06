class RenameMediaTypeToMediaMediatype < ActiveRecord::Migration
  def self.up
  	rename_column :media, :type, :category
  end

  def self.down
  	rename_column :media, :category, :type
  end
end
