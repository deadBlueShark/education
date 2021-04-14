fun main() {
  for (i in 1..9) print(i)
  println()
  for (i in 1..9 step 2) print(i)
  println()
  for (i in 1 until 9) print(i)
  println()
  for (i in 1 until 9 step 3) print(i)
  println()
  for (i in 9 downTo 0 step 2) print(i)
  println()

  val names = arrayOf("Nguyen", "David", "John")
  for ((index, name) in names.withIndex()) {
    println("$index: $name ")
  }
}
