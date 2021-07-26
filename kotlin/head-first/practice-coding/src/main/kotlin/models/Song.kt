package models

class Song(private val title: String, private val artist: String) {
  val upTitle
    get() = title.toUpperCase()

  var downName: String = ""
    set(value) {
      field = value.toLowerCase()
    }

  fun play() {
    println("Playing a song name \"$title\" authored by \"$artist\"")
  }

  fun stop() {
    println("Stop the song name \"$title\"")
  }
}

fun main() {
  val song = Song("As time goes by", "John Lennon")
  song.play()
  song.stop()
  song.downName = "HELLO"
  println(song.upTitle)
  println(song.downName)
}