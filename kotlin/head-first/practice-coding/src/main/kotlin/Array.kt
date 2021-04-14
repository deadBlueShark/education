fun main(args: Array<String>) {
    val names = arrayOf("Nguyen", "David", "Jonhson")
    println("The first item's value: ${names[0]}")
    println("Array's length: ${names.size}")

    val ages: Array<Byte> = arrayOf(1, 3, 4, 5)
    for (age in ages) println(age)
}