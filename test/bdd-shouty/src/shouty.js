class Person {
  constructor(name) {
    this.name = name
    this.message = null
  }

  shout(message) {
    this.message = message
  }

  messageHeard(other) {
    return [other.message]
  }
}

class Network {

}

module.exports = {
  Person,
  Network
}
