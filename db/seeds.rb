def create_user_with_identity(user_attrs, identity_attrs, identity_class)
  User.new(user_attrs) do |u|
    u.identity = identity_class.new identity_attrs
  end.save
end

def email(prefix, first_name, last_name)
  "#{[prefix, first_name, last_name].join('-').downcase}@medberry.nl"
end

[
  ['123456789', '10/10/1970', 'male', 'John', 'Doe', '00000', 'Undefinedstraat', 'Amsterdam'],
  ['987654321', '11/11/1971', 'female', 'Kate', 'Brown', '00000', 'Imaginarystraat', 'Amsterdam']
].each_with_index do |(bsn, dob, gender, fname, lname, zip, address, city), index|
  create_user_with_identity(
    { email: email('patient', fname, lname), password: 'patientq' },
    { bsn: bsn, dob: dob, gender: gender, first_name: fname, last_name: lname, zip: zip, address: address, city: city },
    Patient
  )
end

[
  ['Olivia', 'Wilde'],
  ['Patrick', 'White']
].each_with_index do |(fname, lname), index|
  create_user_with_identity(
    { email: email('doctor', fname, lname), password: 'doctorqq' },
    { first_name: fname, last_name: lname },
    Doctor
  )
end
