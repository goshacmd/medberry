class Admin::DoctorsController < AdminController
  def index
    @doctors = Doctor.all
  end
end
