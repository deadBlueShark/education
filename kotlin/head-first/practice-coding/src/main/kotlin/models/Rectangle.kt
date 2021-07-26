package models

class Rectangle(var width: Int, var height: Int) {
  val isSquare: Boolean
    get() = (width == height)

  val area: Int
    get() = (width * height) 
}