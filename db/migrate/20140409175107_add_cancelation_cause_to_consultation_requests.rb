class AddCancelationCauseToConsultationRequests < ActiveRecord::Migration
  def change
    add_column :consultation_requests, :cancelation_cause, :integer
  end
end
