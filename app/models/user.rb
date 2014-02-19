class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :bsn, presence: true, length: { is: 9 }, format: { with: /\A[0-9]+\z/ }
  validates :dob, presence: true
  validates :gender, presence: true, inclusion: { in: %w(male female) }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :zip, presence: true
  validates :address, presence: true
  validates :city, presence: true
end
