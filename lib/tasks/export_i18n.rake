task export_i18n: :environment do
  I18n::JS.export
end
