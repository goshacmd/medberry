class PusherController < ApplicationController
  protect_from_forgery except: :auth

  def auth
    channel = params[:channel_name]

    if current_user && current_user.pusher_channel_name == channel
      render json: Pusher[channel].authenticate(params[:socket_id])
    else
      head :forbidden
    end
  end
end
