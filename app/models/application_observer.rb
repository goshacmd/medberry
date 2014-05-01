class ApplicationObserver < ActiveRecord::Observer
  def push(channels, model, scope: nil)
    Services.update_pusher.push channels, model, scope: scope
  end
end
