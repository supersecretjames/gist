class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.references :gist
      t.references :user

      t.timestamps
    end
    add_index :favorites, :gist_id
    add_index :favorites, :user_id
  end
end
