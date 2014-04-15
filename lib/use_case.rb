module UseCase
  extend ActiveSupport::Concern

  class ValidationError < ErrorWithData; end
  class NotAuthorized < RuntimeError; end

  included do
    attr_reader :model, :params, :current_user
  end

  module ClassMethods
    def model(klass = nil)
      @model = klass if klass
      @model
    end
  end

  # @param params [Hash]
  # @param current_user [User]
  def initialize(params, current_user)
    @params = params
    @current_user = current_user
  end

  def model_class
    self.class.model
  end

  def model
    @model ||= model_class.find params[:id]
  end

  def attrs
    params[model_class.name.to_s.underscore]
  end

  private

  def ability
    @ability ||= Ability.new(current_user)
  end

  def can?(action, subject = nil)
    subject ||= model
    ability.can? action, subject
  end

  def not_authorized
    raise NotAuthorized
  end

  def validation_error
    raise ValidationError.new(nil, model)
  end
end
