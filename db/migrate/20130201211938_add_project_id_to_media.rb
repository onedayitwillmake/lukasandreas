class AddProjectIdToMedia < ActiveRecord::Migration
  def self.up
    change_table :media do |t|
      t.references :project
    end
  end

  def self.down
    change_table :media do |t|
      t.remove :project_id
    end
  end
end
