class ConsultationRequestSerializer < ActiveModel::Serializer
  attributes :id, :cause, :created_at
  has_one :doctor
  has_one :patient
end
