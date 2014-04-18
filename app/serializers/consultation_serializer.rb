class ConsultationSerializer < ApplicationSerializer
  attributes :id, :cause, :tokbox_session, :tokbox_token, :created_at,
    :expires_at, :status, :finished_at, :finished_by, :extension, :mode,
    :duration

  has_one :doctor
  has_one :patient
  has_many :messages, include: false

  def tokbox_token
    object.tokbox_token_for_role(current_user.role)
  end

  def include_tokbox_token?
    current_user
  end

  def extension
    false
  end
end
