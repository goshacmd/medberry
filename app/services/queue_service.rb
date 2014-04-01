class QueueService
  attr_reader :doctor

  # @param doctor [Doctor]
  def initialize(doctor)
    @doctor = doctor
  end

  # @return [ConsultationRequest, nil]
  def next_request
    doctor.consultation_requests.unfilled.order(created_at: :asc).first
  end
end
