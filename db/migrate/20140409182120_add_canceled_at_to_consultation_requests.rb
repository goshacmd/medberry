class AddCanceledAtToConsultationRequests < ActiveRecord::Migration
  def change
    add_column :consultation_requests, :canceled_at, :datetime
  end
end
