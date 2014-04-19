class PatientSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :status, :dob, :city

  def status
    OnlineStatusService.new.status(object.user)
  end
end
