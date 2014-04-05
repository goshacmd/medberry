class UpdatePusher
  attr_reader :pusher

  # @param pusher [Pusher]
  def initialize(pusher: Pusher)
    @pusher = pusher
  end

  # Push the serialized model.
  #
  # @param channels [Array<String>] list of channels
  # @param model [#active_model_serializer] model to push
  # @param scope [Object] serialization scope (e.g. current user)
  def push(channels, model, scope: nil)
    serializer = model.active_model_serializer
    event = model.class.name.underscore.pluralize

    pusher.trigger channels, event, serializer.new(model, scope: scope).as_json
  end
end
