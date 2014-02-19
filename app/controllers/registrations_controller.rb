class RegistrationsController < Devise::RegistrationsController
  private

  def sign_up_params
    devise_parameter_sanitizer.send(:default_params).permit(:bsn, :dob, :gender, :first_name, :last_name, :zip, :address, :city, :email, :password, :password_confirmation)
  end

  def resource_class
    Patient
  end
end
