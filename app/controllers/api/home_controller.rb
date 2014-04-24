class Api::HomeController < ApiController
  def me
    render json: Me.new(identity: current_user.identity)
  end
end
