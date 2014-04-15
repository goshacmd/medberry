class PushOnlineStatusProcessor
  attr_reader :status_service, :pusher

  def initialize(status_service: OnlineStatusService.new, pusher: Pusher)
    @status_service = status_service
    @pusher = pusher
  end

  # Push the online statuses of all doctors.
  def perform
    make_mapper = -> role {
      -> id { { id: id, status: status_service.status(User.id_string(role, id)) } }
    }

    doctors_data = Doctor.pluck(:id).map(&make_mapper.call(:doctor))
    patients_data = Patient.pluck(:id).map(&make_mapper.call(:patient))

    pusher.trigger 'private-patient-online-pulser', 'pulse', doctors_data
    pusher.trigger 'private-doctor-online-pulser', 'pulse', patients_data
  end
end
