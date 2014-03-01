class CreateConsultationRequests < ActiveRecord::Migration
  def change
    create_table :consultation_requests, id: :uuid do |t|
      t.string :patient_id
      t.index :patient_id
      t.string :doctor_id
      t.index :doctor_id
      t.string :cause

      t.timestamps
    end
  end
end
