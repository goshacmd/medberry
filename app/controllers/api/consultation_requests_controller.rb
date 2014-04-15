class Api::ConsultationRequestsController < ApiController
  before_action :ensure_patient, only: [:create]

  def index
    @requests = current_user.identity.consultation_requests

    @requests = @requests.where(status: params[:status]) if params[:status]

    render json: @requests
  end

  def create
    use_case ConsultationRequestCreator
  end

  def show
    @request = ConsultationRequest.find(params[:id])

    authorize! :read, @request

    render json: @request
  end

  def update
    use_case ConsultationRequestUpdater
  end
end
