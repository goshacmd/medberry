class ConsultationSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :cause, :tokbox_session, :tokbox_token, :created_at, :expiry, :status
  has_one :doctor
  has_one :patient

  def tokbox_token
    object.tokbox_token_for_role(current_user.role)
  end
end
