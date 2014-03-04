class AddStatusToConsultationRequest < ActiveRecord::Migration
  def change
    add_column :consultation_requests, :status, :integer, default: 0
  end
end
