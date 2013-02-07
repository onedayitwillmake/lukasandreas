class AddRankToMedia < ActiveRecord::Migration
  def self.up
    add_column :media, :rank, :integer
  end

  def self.down
    remove_column :media, :rank
  end
end
