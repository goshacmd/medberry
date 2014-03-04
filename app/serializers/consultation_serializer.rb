class ConsultationSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :cause, :created_at, :expiry
  has_one :doctor
  has_one :patient
end
