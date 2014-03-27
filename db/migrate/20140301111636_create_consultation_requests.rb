class CreateConsultationRequests < ActiveRecord::Migration
  def change
    create_table :consultation_requests, id: :uuid do |t|
      t.uuid :patient_id
      t.index :patient_id
      t.uuid :doctor_id
      t.index :doctor_id

      t.string :cause

      t.timestamps
    end
  end
end
