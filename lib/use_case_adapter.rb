class UseCaseAdapter
  attr_reader :use_case, :controller

  def initialize(klass, params, current_user, controller)
    @use_case = klass.new(params, current_user)
    @controller = controller
  end

  def run
    use_case.perform

    controller.render json: use_case.model
  rescue UseCase::NotAuthorized
    controller.not_authorized
  rescue UseCase::ValidationError => e
    controller.render json: { erorrs: e.data.errors }, status: :unprocessable_entity
  end
end
