class DoctorUpdater
  include UseCase

  model Doctor

  def doctor
    model
  end

  def favorite?
    !!attrs[:favorite]
  end

  def perform
    if favorite?
      current_user.identity.fav_doctors << doctor
    else
      current_user.identity.fav_doctors.delete doctor
    end
  end
end
