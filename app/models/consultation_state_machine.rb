class ConsultationStateMachine
  include Statesman::Machine

  state :in_progress, initial: true
  state :over
  state :finished

  transition from: :in_progress, to: [:over, :finished]
  transition from: :over, to: [:in_progress, :finished]

  after_transition do |consultation, transition|
    consultation.update_attribute(:status, transition.to_state)
  end
end
