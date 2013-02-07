class ChangeDefaultForMediaRank < ActiveRecord::Migration
  def self.up
    change_column :media, :rank, :integer, :null => false, :default => 0
  end
  def self.down
    change_column :media, :rank, :integer, :null => true, :default => nil
  end
end
