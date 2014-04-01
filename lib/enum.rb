module Enum
  extend ActiveSupport::Concern

  module ClassMethods
    # @param field_name [String, Symbol]
    # @param enum_hash [Hash]
    def enum(field_name, enum_hash)
      hash = enum_hash.with_indifferent_access
      inverted = hash.invert
      getter = field_name.to_s
      setter = "#{field_name}="

      define_method(getter) { inverted[read_attribute(field_name)].try(:to_sym) }
      define_method(setter) { |value| write_attribute(field_name, enum_hash[value]) }
    end
  end
end
