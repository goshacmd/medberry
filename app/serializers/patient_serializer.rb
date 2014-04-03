class PatientSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :status

  def status
    OnlineStatusService.new.status(object.user)
  end
end
