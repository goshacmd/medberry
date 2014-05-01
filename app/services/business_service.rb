# A service responsible for checking business status of doctors &
# patients.
class BusinessService
  # Check if doctor/patient aren't in the middle of an active
  # consultation.
  #
  # @param identity [Doctor, Patient]
  def no_active_consultation?(identity)
    identity.consultations.where('status != :finished', finished: Consultation::STATUSES[:finished]).count == 0
  end

  # Check if patient has no active consultation requests.
  #
  # @param identity [Patient]
  def no_active_request?(identity)
    identity.consultation_requests.where('status = :new', new: ConsultationRequest::STATUSES[:new]).count == 0
  end

  # Check if patient is neither in the middle of a consultation nor
  # has an active consultation request.
  #
  # @param identity [Patient]
  def nothing_active?(identity)
    no_active_consultation?(identity) && no_active_request?(identity)
  end
end
