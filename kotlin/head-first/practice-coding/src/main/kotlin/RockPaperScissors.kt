import kotlin.math.abs

fun main() {
  val options: Array<String> = arrayOf("Scissors", "Rock", "Paper")

  // System chose option
  val systemChose: String = getSystemChose(options)

  // Get option from user, validate option
  var userChose: String? = getUserChose(options)

  // Compare and Print result
  println("System choice: $systemChose")
  println(detectResult(systemChose, userChose, options))
}

fun getSystemChose(options: Array<String>): String {
  return options[(Math.random() * options.size).toInt()]
}

fun getUserChose(options: Array<String>): String? {
  var userChose: String?
  do {
    print("Please pick an option: ")
    userChose = readLine()
    userChose = userChose?.toLowerCase()?.capitalize() ?: ""
  } while (userChose !in options)
  return userChose
}

fun detectResult(systemChose: String?, userChose: String?, options: Array<String>): String {
  if (systemChose == userChose) return "DRAW"

  val userChoseIndex = options.indexOf(userChose)
  val systemChoseIndex = options.indexOf(systemChose)
  return if (abs(userChoseIndex - systemChoseIndex) == 1) {
    if (userChoseIndex > systemChoseIndex) "YOU WIN" else "SYSTEM WIN"
  } else {
    if (userChoseIndex < systemChoseIndex) "YOU WIN" else "SYSTEM WIN"
  }
}