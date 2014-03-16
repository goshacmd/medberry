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
    status = DoctorStatusChecker.new(consultation_request.doctor).check

    if status == :online && consultation_request.save
      Pusher.trigger consultation_request.doctor_channel, "requests", ConsultationRequestSerializer.new(consultation_request).as_json
      consultation_request
    else
      raise ValidationError.new(nil, consultation_request)
    end
  end
end
