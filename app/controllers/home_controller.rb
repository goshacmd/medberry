class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:app]

  def index
    redirect_to '/app' if current_user
  end

  def app
    render layout: 'js_app'
  end
end
