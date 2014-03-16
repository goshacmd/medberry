class AddFinishDetailsToConsultation < ActiveRecord::Migration
  def change
    change_table :consultations do |t|
      t.date :finished_at
      t.string :finished_by_role
    end
  end
end
