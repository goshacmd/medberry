class FavoriteDoctorObserver < ActiveRecord::Observer
  def after_create(fav)
    push_me(fav)
  end

  def after_destroy(fav)
    push_me(fav)
  end

  def push_me(fav)
    update_pusher = UpdatePusher.new
    patient = fav.patient
    user = patient.user

    update_pusher.push user.pusher_channel_name, patient.me, scope: user
  end
end
