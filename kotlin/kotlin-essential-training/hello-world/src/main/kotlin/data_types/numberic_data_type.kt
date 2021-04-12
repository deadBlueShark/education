fun main() {
    // Byte 8bits, Short 16bits, Int 32bits -> can infer, Long 64bits
    // Float 32bits -> can infer, Double 64bits
    var count1: Int = 10
    var count2: Short = 20
    var count3: Byte = 16
    val count: Long = 2222L
    val doubleNum: Double = 21212.22
    val floatNum: Float = 323.32F

    println(count)
    println(count1 + count2 + count3)

    // parse Double to Int
    println(doubleNum.toInt())
}