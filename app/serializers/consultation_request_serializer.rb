class ConsultationRequestSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :cause, :created_at
  has_one :doctor
  has_one :patient
end