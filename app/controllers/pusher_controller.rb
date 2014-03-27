class PusherController < ApplicationController
  protect_from_forgery except: :auth

  def auth
    authenticator = ChannelAuthenticator.new params[:channel_name], params[:socket_id], current_user

    if authenticator.should_authenticate?
      render json: authenticator.authenticate
    else
      head :forbidden
    end
  end
end
