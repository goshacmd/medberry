class OnlineStatusPusher
  # Push the online statuses of all doctors.
  def trigger
    data = Doctor.all.map do |d|
      { id: d.id, status: DoctorStatusChecker.new(d).check }
    end

    Pusher.trigger 'online_pulser', 'pulse', data
  end
end
