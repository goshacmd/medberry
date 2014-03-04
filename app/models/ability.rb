class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, Consultation do |consultation|
      consultation.doctor.user == user || consultation.patient.user == user
    end
  end
end
