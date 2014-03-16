class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :status

  def status
    DoctorStatusChecker.new(object).check
  end
end
