class ConsultationRequestQueueMeta
  include ActiveModel::Model
  include ActiveModel::Serialization

  attr_accessor :id, :position, :waiting, :updated_at
end
