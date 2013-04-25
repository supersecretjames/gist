class CreateGistFiles < ActiveRecord::Migration
  def change
    create_table :gist_files do |t|
      t.text :body
      t.references :gist

      t.timestamps
    end
    add_index :gist_files, :gist_id
  end
end
