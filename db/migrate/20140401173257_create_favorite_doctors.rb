class CreateFavoriteDoctors < ActiveRecord::Migration
  def change
    create_table :favorite_doctors, id: :uuid do |t|
      t.uuid :patient_id
      t.index :patient_id
      t.uuid :doctor_id
      t.index :doctor_id

      t.datetime :created_at
    end
  end
end
