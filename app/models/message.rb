class Message < ActiveRecord::Base
  belongs_to :consultation
  belongs_to :sender, class_name: 'User'

  validates :text, presence: true
end
