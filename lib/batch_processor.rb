module BatchProcessor
  def perform
    selector.each { |thing| process thing }
  end

  # @abstract
  def selector
    raise NotImplementedError
  end

  # @abstract
  def process
    raise NotImplementedError
  end
end
