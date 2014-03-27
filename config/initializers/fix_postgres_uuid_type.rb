module ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID
  class UUID < Type
    def type_cast(value)
      value == '' ? nil : value
    end
  end

  register_type 'uuid', UUID.new
end
