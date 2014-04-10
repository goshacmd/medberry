# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :consultation_session do
    consultation_id ""
    tokbox_session "MyString"
    tokbox_token_patient "MyText"
    tokbox_token_doctor "MyText"
    expires_at "2014-04-10 14:10:02"
  end
end
