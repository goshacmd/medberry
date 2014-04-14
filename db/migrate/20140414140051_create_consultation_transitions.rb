class CreateConsultationTransitions < ActiveRecord::Migration
  def change
    create_table :consultation_transitions do |t|
      t.string :to_state
      t.hstore :metadata
      t.integer :sort_key
      t.uuid :consultation_id
      t.datetime :created_at
    end

    add_index :consultation_transitions, :consultation_id
    add_index :consultation_transitions, [:sort_key, :consultation_id], unique: true
  end
end
