class DoctorUpdater
  include UseCase

  model Doctor

  def doctor
    model
  end

  def favorite?
    !!attrs[:favorite]
  end

  def fav_doctors
    current_user.identity.fav_doctors
  end

  def perform
    if favorite? && fav_doctors.where(id: doctor.id).size == 0
      fav_doctors << doctor
    else
      fav_doctors.destroy doctor
    end
  end
end
