class Services
  class << self
    def lookup_service_class(name)
      const_get "#{name.camelize}Service"
    end

    def build_service_instance(name)
      lookup_service_class(name).new
    end

    def lookup_service(name)
      @services ||= {}
      @services[name] ||= build_service_instance(name)
    end

    def method_missing(name)
      lookup_service(name.to_s)
    end
  end
end
