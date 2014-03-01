class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :role
end
