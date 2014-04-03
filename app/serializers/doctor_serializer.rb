class DoctorSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :status, :practice, :favorite

  def status
    OnlineStatusService.new.status(object.user)
  end

  def favorite
    current_user.identity.fav_doctors.where(id: object.id).size == 1
  end

  def include_favorite?
    current_user.try(:patient?)
  end

  def filter(keys)
    if current_user && current_user.patient?
      keys
    else
      keys - [:favorite]
    end
  end
end
