class MessageSerializer < ApplicationSerializer
  attributes :id, :text, :sender_role, :created_at
  has_one :consultation, include: false

  def sender_role
    object.sender.role
  end
end
