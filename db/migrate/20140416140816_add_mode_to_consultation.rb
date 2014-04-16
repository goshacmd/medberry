class AddModeToConsultation < ActiveRecord::Migration
  def change
    add_column :consultations, :mode, :integer, default: 2
  end
end
