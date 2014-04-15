class Api::MessagesController < ApiController
  def create
    use_case MessageCreator
  end
end
