class ConsultationRequestQueueMeta
  include ActiveModel::Model
  include ActiveModel::Serialization

  attr_accessor :id, :position, :waiting, :updated_at

  def active_model_serializer
    ConsultationRequestQueueMetaSerializer
  end
end
