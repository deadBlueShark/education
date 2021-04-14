package control_flow

fun main() {
    var age = 10
    println(if (age > 20) "Adult" else "Teen")
    val ageClass = when (age) {
        in 0..10 -> "Baby"
        in 11..20 -> "Teen"
        in 21..30 -> "Adult"
        else -> "Not classify"
    }
    println(ageClass)
}