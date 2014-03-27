class OnlineStatusPusher
  # Push the online statuses of all doctors.
  def trigger
    mapper = -> i { { id: i.id, status: UserStatusChecker.new(i.user).check } }

    doctors_data = Doctor.all.map(&mapper)
    patients_data = Patient.all.map(&mapper)

    Pusher.trigger 'private-patient-online-pulser', 'pulse', doctors_data
    Pusher.trigger 'private-doctor-online-pulser', 'pulse', patients_data
  end
end
