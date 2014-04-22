class DoctorSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :status, :practice, :favorite,
    :available

  def status
    OnlineStatusService.new.status(object.user)
  end

  def favorite
    current_user.identity.fav_doctors.where(id: object.id).size == 1
  end

  def available
    current_user.identity.available_doctors.where(id: object.id).size > 0
  end

  def include_favorite?
    current_user.try(:patient?)
  end

  def include_available?
    current_user.try(:patient?)
  end

  def filter(keys)
    if current_user && current_user.patient?
      keys
    else
      keys - [:favorite, :available]
    end
  end
end
