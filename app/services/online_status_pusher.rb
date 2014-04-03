class OnlineStatusPusher
  attr_reader :status_service

  def initialize(status_service: OnlineStatusService.new)
    @status_service = status_service
  end

  # Push the online statuses of all doctors.
  def perform
    mapper = -> i { { id: i.id, status: status_service.status(i.user) } }

    doctors_data = Doctor.all.map(&mapper)
    patients_data = Patient.all.map(&mapper)

    Pusher.trigger 'private-patient-online-pulser', 'pulse', doctors_data
    Pusher.trigger 'private-doctor-online-pulser', 'pulse', patients_data
  end
end
