class AddStatusToConsultation < ActiveRecord::Migration
  def change
    add_column :consultations, :status, :integer, default: 0
  end
end
