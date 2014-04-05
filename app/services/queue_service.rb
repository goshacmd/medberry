# A service for querying the stats of the doctor's queue.
class QueueService
  attr_reader :doctor

  # Intiialize a new +QueueService+.
  #
  # @param doctor [Doctor]
  def initialize(doctor)
    @doctor = doctor
  end

  # Get a set of consultation requests.
  def unfilled_requests
    doctor.consultation_requests.unfilled.order(created_at: :asc)
  end

  # @return [ConsultationRequest, nil]
  def next_request
    unfilled_requests.first
  end

  # @return [Consultation, nil]
  def last_consultation
    doctor.consultations.order(created_at: :desc).first
  end

  # Get the position of a request in the queue.
  #
  # @return [Integer]
  def position_in_queue(request)
    unfilled_requests.index(request)
  end

  # Check if the doctor is busy (in middle of active consultation).
  def busy?
    consultation = last_consultation
    consultation && !consultation.finished?
  end

  # Get some stats for the request.
  #
  # @param request [ConsultationRequest]
  def stats(request)
    position = position_in_queue(request)
    busy = busy?
    waiting = ((busy ? 1 : 0) + position) * 20

    {
      position: position_in_queue(request),
      waiting: waiting
    }
  end
end
