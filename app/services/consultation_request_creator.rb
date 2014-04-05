class ConsultationRequestCreator
  class ValidationError < ErrorWithData; end

  attr_reader :params, :current_user

  # @param params [Hash]
  # @param current_user [User]
  def initialize(params, current_user)
    @params = params
    @current_user = current_user
  end

  # Create a consultation request, checking the online status of the doctor.
  def perform
    consultation_request = ConsultationRequest.new params
    consultation_request.patient = current_user.identity
    online = OnlineStatusService.new.online?(consultation_request.doctor.user)

    # TODO: do not allow more than 1 open request at a time from a single user

    if online && consultation_request.save
      consultation_request
    else
      raise ValidationError.new(nil, consultation_request)
    end
  end
end
