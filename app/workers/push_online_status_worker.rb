class PushOnlineStatusWorker
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  sidekiq_options retry: false
  recurrence { secondly(30) }

  attr_reader :status_service, :update_pusher

  def initialize(status_service: Services.online_status, update_pusher: Services.update_pusher)
    @status_service = status_service
    @update_pusher = pusher
  end

  # Push the online statuses of all doctors.
  def perform
    make_mapper = -> role {
      -> id { { id: id, status: status_service.status([role, id]) } }
    }

    doctors_data = Doctor.pluck(:id).map(&make_mapper.call(:doctor))
    patients_data = Patient.pluck(:id).map(&make_mapper.call(:patient))

    update_pusher.push_pulse :patient, doctors_data
    update_pusher.push_pulse :doctor, patients_data
  end
end
