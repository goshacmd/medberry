class ConsultationSerializer < ApplicationSerializer
  attributes :id, :cause, :tokbox_session, :tokbox_token, :created_at,
    :expires_at, :status, :finished_at, :finished_by

  has_one :doctor
  has_one :patient

  def tokbox_token
    object.tokbox_token_for_role(current_user.role)
  end
end
