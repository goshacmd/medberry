class PatientInviter
  class NotAPatient < StandardError; end

  attr_reader :email, :current_user

  def initialize(email, current_user)
    @email = email
    @current_user = current_user
  end

  def doctor
    current_user.identity
  end

  def patient_user
    @user ||= User.where(email: email).first
  end

  def invitee_patient?
    patient_user.patient?
  end

  def patient
    patient_user.try(:identity)
  end

  def send_invitation
    User.invite!({ email: email }, current_user).tap do |user|
      user.identity = Patient.new
      user.save validate: false
    end
  end

  def perform
    raise NotAPatient if patient_user && !invitee_patient?
    send_invitation unless patient_user

    patient.available_doctors << doctor
    patient.save
  end
end
