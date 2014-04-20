class ConsultationRequestSerializer < ApplicationSerializer
  attributes :id, :cause_category_id, :status, :cancelation_cause,
    :created_at, :canceled_at

  has_one :doctor
  has_one :patient
  has_one :consultation
  has_one :queue_meta, root: :consultation_request_queue_meta

  def queue_meta
    ConsultationRequestQueueMeta.new(id: object.id)
  end
end
