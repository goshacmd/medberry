class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :identity, polymorphic: true, autosave: true, validate: true
  accepts_nested_attributes_for :identity

  def role
    identity.class.name.downcase
  end

  def doctor?
    role == 'doctor'
  end

  def patient?
    role == 'patient'
  end

  def full_name
    [identity.first_name, identity.last_name].join(' ')
  end

  def id_string
    "#{role}-#{identity.id}"
  end

  def pusher_channel_name
    "private-#{id_string}"
  end

  def pulser_channel_name
    "private-#{role}-online-pulser"
  end
end
