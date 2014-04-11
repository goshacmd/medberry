class ConsultationRequestCreator
  class ValidationError < ErrorWithData; end
  class NotAuthorized < RuntimeError; end

  attr_reader :params, :current_user

  # @param params [Hash]
  # @param current_user [User]
  def initialize(params, current_user)
    @params = params
    @current_user = current_user
  end

  # Create a consultation request, checking the online status of the doctor.
  def perform
    unless can_create?
      raise NotAuthorized
    end

    consultation_request = ConsultationRequest.new params
    consultation_request.patient = current_user.identity
    online = OnlineStatusService.new.online?(consultation_request.doctor.user)

    if online && consultation_request.save
      consultation_request
    else
      raise ValidationError.new(nil, consultation_request)
    end
  end

  def can_create?
    has_no_active_consultation?(current_user.identity) &&
      has_no_active_request?(current_user.identity)
  end

  def has_no_active_consultation?(patient)
    last_consultation = patient.consultations.order(created_at: :desc).first
    last_consultation ? last_consultation.finished? : true
  end

  def has_no_active_request?(patient)
    last_request = patient.consultation_requests.order(created_at: :desc).first
    last_request ? !last_request.new_request? : true
  end
end
