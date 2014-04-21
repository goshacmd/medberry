class Api::ConnectionsController < ApiController
  before_action :ensure_doctor

  def create
    PatientInviter.new(params[:email], current_user).perform
    head :ok
  end
end
