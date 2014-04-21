class Users::InvitationsController < Devise::InvitationsController
  before_action :ensure_doctor, only: [:new, :create]

  private

  def ensure_doctor
    redirect_to root_path unless current_user.doctor?
  end

  def invite_resource(&block)
    resource_class.invite!(invite_params, current_inviter, &block).tap do |res|
      res.identity = Patient.new
      res.save validate: false
    end
  end

  def update_resource_params
    devise_parameter_sanitizer.send(:default_params).permit(
      :invitation_token,
      :email, :password, :password_confirmation,
      identity_attributes: [
        :id, :bsn, :dob, :gender, :first_name, :last_name, :zip, :address, :city,
        { insurance_policy_attributes: [:insurance_company_id, :number] }
      ]
    )
  end
end
