class AddRankToProjects < ActiveRecord::Migration
  def self.up
    add_column :projects, :rank, :integer
  end

  def self.down
    remove_column :projects, :rank
  end
end
