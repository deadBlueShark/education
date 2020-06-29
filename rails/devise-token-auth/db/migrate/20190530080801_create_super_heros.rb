class CreateSuperHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :super_heros do |t|
      t.string :name
      t.string :skill

      t.timestamps
    end
  end
end
