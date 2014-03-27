class RegistrationsController < Devise::RegistrationsController
  private

  def sign_up_params
    devise_parameter_sanitizer.send(:default_params).permit(
      :email, :password, :password_confirmation,
      identity_attributes: [
        :bsn, :dob, :gender, :first_name, :last_name, :zip, :address, :city,
        { insurance_policy_attributes: [:insurance_company_id, :number] }
      ]
    )
  end

  def build_resource(hash = nil)
    self.resource = User.new do |u|
      u.identity = Patient.new
      u.assign_attributes(hash)
    end
  end
end
