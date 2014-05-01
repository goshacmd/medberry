class FavoriteDoctorObserver < ApplicationObserver
  def after_create(fav)
    push_me(fav)
  end

  def after_destroy(fav)
    push_me(fav)
  end

  def push_me(fav)
    patient = fav.patient
    user = patient.user

    push user.pusher_channel_name, patient.me, scope: user
  end
end
