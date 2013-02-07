class ChangeDefaultForProjectRankAgain < ActiveRecord::Migration
  def self.up
    change_column :projects, :rank, :integer, :null => false, :default => 0
  end

  def self.down
    change_column :projects, :rank, :integer, :null => false, :default => 0
  end
end
