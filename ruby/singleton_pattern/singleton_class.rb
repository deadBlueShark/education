# Each object has a Singleton class when we open it
# Singleton class is a class only available for that object
module A
  def hi
    puts 'Hi From A'
  end
end

module B  
  def hi
    puts 'Hi From B'
  end
end

class Vehicle
  prepend A     
  include B 

  # Add a singleton method to singleton class of object 'Vehicle'
  def self.hello
    puts 'Hello'
  end

  def hi
    puts 'Hi'
  end
end

# Method lookup chain: [eigenclass, prepended module, itself class, included module, super class]

car = Vehicle.new

# Add a method to singleton class of 'car' object
def car.hi
  puts 'Hi From Eigenclass'
end

# Alternative syntax
class << car
  def greet
    puts 'Greet'
  end
end

car.hi # Hi From Eigenclass
car.greet
