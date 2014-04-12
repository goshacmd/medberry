class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages, id: :uuid do |t|
      t.uuid :consultation_id
      t.index :consultation_id
      t.uuid :sender_id
      t.index :sender_id
      t.text :text

      t.datetime :created_at
    end
  end
end
