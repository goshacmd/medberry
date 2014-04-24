class MeSerializer < ApplicationSerializer
  attributes :id
  has_one :last_consultation_request, root: 'consultation_requests'
  has_many :favorite_doctors, root: 'doctors'
end
