class CreateConsultationSessions < ActiveRecord::Migration
  def change
    create_table :consultation_sessions, id: :uuid do |t|
      t.uuid :consultation_id
      t.index :consultation_id
      t.text :tokbox_token_patient
      t.text :tokbox_token_doctor
      t.datetime :expires_at

      t.timestamps
    end

    change_table :consultations do |t|
      t.remove :tokbox_token_patient
      t.remove :tokbox_token_doctor
      t.remove :expires_at
    end
  end
end
