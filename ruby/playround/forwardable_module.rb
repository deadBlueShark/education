require 'forwardable'

class AnimalCollection
  extend Forwardable

  def_delegator :@animals, :[], :animal_at
  def_delegator :@animals, :push, :add_animal
  def_delegators :@animals, :size, :map

  attr_reader :animals

  def initialize
    @animals = []
  end
end

collection = AnimalCollection.new
collection.add_animal("Dog", "Cat", "Lion")
puts collection.animal_at(0)
puts "All animals: #{collection.animals}"
puts "Animals count: #{collection.size}"
puts "Upcase animals' name: #{collection.map(&:upcase)}"
