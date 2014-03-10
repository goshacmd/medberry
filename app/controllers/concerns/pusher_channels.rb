module PusherChannels
  def doctor_channel
    doctor.user.pusher_channel_name
  end

  def patient_channel
    patient.user.pusher_channel_name
  end

  def channels
    [doctor_channel, patient_channel]
  end
end
