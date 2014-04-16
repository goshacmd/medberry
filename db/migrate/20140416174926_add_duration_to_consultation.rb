class AddDurationToConsultation < ActiveRecord::Migration
  def change
    add_column :consultations, :duration, :integer
  end
end
