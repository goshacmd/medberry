class DoctorSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :status, :practice

  def status
    UserStatusChecker.new(object.user).check
  end
end
