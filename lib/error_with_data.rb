class ErrorWithData < StandardError
  attr_accessor :data

  def initialize(message = nil, data = nil)
    super(message)
    self.data = data
  end
end
