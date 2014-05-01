class UpdatePusherService
  attr_reader :pusher

  # @param pusher [Pusher]
  def initialize(pusher: Pusher)
    @pusher = pusher
  end

  # Push the pulse.
  #
  # @param identity_kind [String]
  # @param data [Array<Hash>]
  def push_pulse(identity_kind, data)
    pusher.trigger "private-#{identity_kind}-online-pulser", 'pulse', data
  end

  # Push the serialized model.
  #
  # @param channels [Array<String>] list of channels
  # @param model [#active_model_serializer] model to push
  # @param scope [Object] serialization scope (e.g. current user)
  def push(channels, model, scope: nil)
    pusher.trigger channels, event_name(model), serialize(model, scope: scope)
  end

  # @param model [Object]
  # @return [String]
  def event_name(model)
    "data_update:#{model.class.name.underscore.pluralize}"
  end

  # @param model [#active_model_serializer]
  # @param scope [Object] serialization scope
  # @return [Hash]
  def serialize(model, scope: nil)
    model.active_model_serializer.new(model, scope: scope).to_json
  end
end
