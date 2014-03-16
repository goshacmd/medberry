class ApiController < ApplicationController
  before_action :check_sign_in

  rescue_from CanCan::AccessDenied, with: :not_authorized

  private

  def not_authorized
    render status: 401, json: { error: 'Not authorized.' }
  end

  def check_sign_in
    not_authorized unless user_signed_in?
  end

  def ensure_patient
    check_sign_in || not_authorized unless Patient === current_user.identity
  end

  def ensure_doctor
    check_sign_in || not_authorized unless Doctor === current_user.identity
  end
end
