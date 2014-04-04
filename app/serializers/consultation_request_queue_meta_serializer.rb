class ConsultationRequestQueueMetaSerializer < ApplicationSerializer
  attributes :id, :position, :waiting, :updated_at
end
