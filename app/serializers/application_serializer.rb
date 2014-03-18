class ApplicationSerializer < ActiveModel::Serializer
  embed :ids, include: true

  alias_method :current_user, :scope
end
