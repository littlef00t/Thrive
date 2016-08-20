class CreateShelters < ActiveRecord::Migration
  def change
    create_table :shelters do |t|
      t.string :name, null: false
      t.text :description
      t.float :long, null: false
      t.float :lat, null: false

      t.timestamps null: false
    end
  end
end
