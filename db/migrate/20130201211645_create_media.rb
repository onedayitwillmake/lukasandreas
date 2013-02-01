class CreateMedia < ActiveRecord::Migration
  def self.up
    create_table :media do |t|
      t.string :type
      t.string :url
      t.string :caption

      t.timestamps
    end
  end

  def self.down
    drop_table :media
  end
end
