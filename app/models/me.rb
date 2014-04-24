class Me
  include ActiveModel::Model
  include ActiveModel::Serialization

  attr_accessor :identity

  def id
    'me'
  end

  def last_consultation_request
    identity.consultation_requests.order(created_at: :desc).first
  end

  def favorite_doctors
    return [] unless identity.patient?

    identity.fav_doctors
  end

  def active_model_serializer
    MeSerializer
  end
end
