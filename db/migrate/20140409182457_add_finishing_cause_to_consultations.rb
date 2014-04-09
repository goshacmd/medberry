class AddFinishingCauseToConsultations < ActiveRecord::Migration
  def change
    add_column :consultations, :finishing_cause, :integer
  end
end
