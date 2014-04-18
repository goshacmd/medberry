class MessageSerializer < ApplicationSerializer
  attributes :id, :text, :sender_role, :created_at
  # FIXME don't include the whole consultation into a message
  # ember-data for some reason won't get consultation's newly pushed messages
  # if updated messages_id isn't sent as well
  has_one :consultation#, include: false

  def sender_role
    object.sender.role
  end
end
