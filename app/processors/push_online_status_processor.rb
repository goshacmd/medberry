class PushOnlineStatusProcessor
  attr_reader :status_service, :pusher

  def initialize(status_service: OnlineStatusService.new, pusher: Pusher)
    @status_service = status_service
    @pusher = pusher
  end

  # Push the online statuses of all doctors.
  def perform
    mapper = -> i { { id: i.id, status: status_service.status(i.user) } }

    doctors_data = Doctor.all.map(&mapper)
    patients_data = Patient.all.map(&mapper)

    pusher.trigger 'private-patient-online-pulser', 'pulse', doctors_data
    pusher.trigger 'private-doctor-online-pulser', 'pulse', patients_data
  end
end
