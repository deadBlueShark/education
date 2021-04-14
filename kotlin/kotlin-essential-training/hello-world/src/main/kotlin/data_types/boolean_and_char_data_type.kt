fun main() {
    demoChar()
    demoBoolean()
}

private fun demoChar() {
    val letter = 'A'
    val specialChar = '\t'
    val infinityMark = '\u221E'

    println("Letter $letter")
    println("Tabbed '$specialChar' over")
    println("Infinity $infinityMark")
    println("Convert character $letter to integer ${letter.toInt()}")
}

private fun demoBoolean() {
    val trueValue = true
    val falseValue = false
    println("$trueValue and $falseValue")

    val name = "Nguyen"
    val age  = 27
    val who = if (name == "Nguyen" && age == 27) "It's Nguyen" else "It's not Nguyen"
    println(who)
}