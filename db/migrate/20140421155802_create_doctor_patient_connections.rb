class CreateDoctorPatientConnections < ActiveRecord::Migration
  def change
    create_table :doctor_patient_connections do |t|
      t.uuid :doctor_id
      t.uuid :patient_id

      t.datetime :created_at
    end
  end
end
