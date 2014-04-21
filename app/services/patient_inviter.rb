class PatientInviter
  attr_reader :email, :current_user

  def initialize(email, current_user)
    @email = email
    @current_user = current_user
  end

  def doctor
    current_user.identity
  end

  def patient_user
    @patient_user ||= User.where(email: email).first
  end

  def invitee_patient?
    patient_user.patient?
  end

  def patient
    patient_user.try(:identity)
  end

  def send_invitation
    User.invite!({ email: email }, current_user)
  end

  def perform
    raise RuntimeError, 'invited user not a patient' if patient_user && !invitee_patient?
    send_invitation unless patient_user
  end
end
