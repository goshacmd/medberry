class ConsultationRequestsController < ApiController
  before_action :ensure_patient

  def create
    @request = ConsultationRequestCreator.new(cr_params, current_user).perform

    render json: @request
  rescue ConsultationRequestCreator::ValidationError => e
    render json: { errors: e.data.full_error_messages }, status: :unprocessable_entity
  end

  def show
    @request = ConsultationRequest.find(params[:id])

    authorize! :read, @request

    render json: @request
  end

  private

  def cr_params
    params.require(:consultation_request).permit(:doctor_id, :cause)
  end
end
