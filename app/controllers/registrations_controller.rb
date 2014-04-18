class RegistrationsController < Devise::RegistrationsController
  private

  def sign_up_params
    user_params
  end

  def account_update_params
    user_params
  end

  def user_params
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

  def update_resource(resource, params)
    identity_attrs = params.delete(:identity_attributes)
    resource.identity.assign_attributes(identity_attrs)

    resource.update_with_password(params)
  end
end
