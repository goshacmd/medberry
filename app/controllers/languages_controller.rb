class LanguagesController < ApplicationController
  def english
    set_locale_and_redirect(:en)
  end

  def dutch
    set_locale_and_redirect(:nl)
  end

  private

  def set_locale_and_redirect(locale)
    I18n.locale = locale

    session[:locale] = locale

    redirect_to :back
  rescue ActionController::RedirectBackError
    redirect_to root_path
  end
end
