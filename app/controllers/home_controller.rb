class HomeController < ApplicationController
  def index
    redirect_to '/app' if current_user
  end

  def app
  end
end
