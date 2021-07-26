package models

class Dog(val name: String, var weight: Int, val breed: String) {
  fun bark() {
    println(if (weight < 20) "Yip!" else "Woof!")
  }
}

fun main() {
  var dog: Dog = Dog("Jack", 12, "Beggie")
  println("Name: ${dog.name}. Weight: ${dog.weight}. Breed: ${dog.breed}")
  dog.bark()

  dog.weight = 80
  println("Name: ${dog.name}. Weight: ${dog.weight}. Breed: ${dog.breed}")
  dog.bark()
}