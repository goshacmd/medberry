class ConsultationRequestsController < ApiController
  before_action :ensure_patient, only: [:create]

  def create
    @request = ConsultationRequest.new(cr_params)
    @request.patient = current_user.identity

    if @request.save
      render json: @request
    else
      render json: { errors: @request.full_error_messages }, status: :unprocessable_entity
    end
  end

  private

  def cr_params
    params.require(:consultation_request).permit(:doctor_id, :cause)
  end
end
