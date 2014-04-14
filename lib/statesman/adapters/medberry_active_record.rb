module Statesman
  module Adapters
    class MedberryActiveRecord < ActiveRecord
      def initialize(transition_class, parent_model, observer)
        @transition_class = transition_class
        @parent_model = parent_model
        @observer = observer
      end
    end
  end
end
