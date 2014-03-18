class ConsultationRequestSerializer < ApplicationSerializer
  attributes :id, :cause, :status, :created_at
  has_one :doctor
  has_one :patient
  has_one :consultation
end
