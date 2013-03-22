class ExtendProjectFooter < ActiveRecord::Migration
  def self.up
    change_column :projects, :footer, :string, :limit => 16384
  end

  def self.down
    change_column :projects, :footer, :string, :limit => 255
  end
end
