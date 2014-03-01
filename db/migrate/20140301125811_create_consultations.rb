class CreateConsultations < ActiveRecord::Migration
  def change
    create_table :consultations, id: :uuid do |t|
      t.string :patient_id
      t.index :patient_id
      t.string :doctor_id
      t.index :doctor_id
      t.string :request_id
      t.index :request_id

      t.string :cause
      t.string :tokbox_session
      t.text :tokbox_token_patient
      t.text :tokbox_token_doctor

      t.datetime :expiry

      t.timestamps
    end
  end
end
