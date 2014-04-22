class Api::ConnectionsController < ApiController
  before_action :ensure_doctor

  def create
    PatientInviter.new(params[:email], current_user).perform
    head :ok
  rescue PatientInviter::NotAPatient
    render json: { error: 'Not a patient.' }, status: :unprocessable_entity
  end
end
