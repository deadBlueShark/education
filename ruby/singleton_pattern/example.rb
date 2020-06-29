require 'singleton'

class Config
  include Singleton

  attr_accessor :time, :log
end

# Config.new -> private method `new' called for Config:Class (NoMethodError)
p Config.instance
p Config.instance # The same object

# send can call private method
p Config.send(:new) # The same object as above
