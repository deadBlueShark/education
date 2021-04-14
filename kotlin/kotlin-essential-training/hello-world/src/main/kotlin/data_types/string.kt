package data_types

fun main() {
    val name: String = "Nguyen"
    val  money = 22222
    println("$name owe \$$money")
    println("My name have ${name.length} characters")

    // Get char at index
    println(name.get(2))
    println(name[2])

    println("nguyen".compareTo("alpha"))
    println("Nguyen".subSequence(1, 3))

    for (letter in name) {
        print("$letter ")
    }
    print("\n")
    for (index in name.indices) {
        print("${name[index]} ")
    }
    print("\n")
    // Raw string
    var poem = """
        Không có việc gì khó
        Chỉ sợ lòng không bền 
        Đào núi và lấp biển
        Quyết chí ắt làm nên
    """.trimIndent()
    println(poem)
}