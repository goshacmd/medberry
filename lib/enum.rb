module Enum
  extend ActiveSupport::Concern

  module ClassMethods
    def enum(field_name, enum_hash)
      inverted = enum_hash.invert
      getter = field_name.to_s
      setter = "#{field_name}="

      define_method(getter) { inverted[read_attribute(field_name)].try(:to_sym) }
      define_method(setter) { |value| write_attribute(field_name, enum_hash[value]) }
    end
  end
end
