class DoctorsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @doctors = Doctor.all

    render json: @doctors
  end
end
