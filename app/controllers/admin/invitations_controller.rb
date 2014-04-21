class Admin::InvitationsController < AdminController
  def new
    @invite = OpenStruct.new(email: '', role: '')
  end

  def create
    email, role = params[:invite].values_at(:email, :role)

    if User.where(email: email).count == 0 && ['patient', 'doctor'].include?(role)
      User.invite!({ email: email }, nil).tap do |user|
        user.identity = role == 'patient' ? Patient.new : Doctor.new
        user.save validate: false
      end

      redirect_to new_admin_invitations_path, notice: 'Invite sent succesfully.'
    else
      redirect_to new_admin_invitations_path, alert: 'Invalid params'
    end
  end
end
