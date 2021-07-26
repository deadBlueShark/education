package models

class DrumKit(var hasTopHat: Boolean, var hasSnare: Boolean) {
  fun playTopHat() {
    if (hasTopHat) println("ding ding ba-da-bing!")
  }

  fun playSnare() {
    if (hasSnare) println("bang bang bang!")
  }
}

fun main() {
  val d = DrumKit(hasTopHat = true, hasSnare = true)
  d.playTopHat()
  d.playSnare()

  d.hasSnare = false
  d.playTopHat()
  d.playSnare()
}