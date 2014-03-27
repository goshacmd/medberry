class PatientSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :status

  def status
    UserStatusChecker.new(object.user).check
  end
end
