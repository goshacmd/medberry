class Api::ConsultationsController < ApiController
  def show
    @consultation = Consultation.find(params[:id])

    authorize! :read, @consultation

    render json: @consultation
  end

  def update
    use_case ConsultationUpdater
  end
end
