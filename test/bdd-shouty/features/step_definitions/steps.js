const {Person, Network} = require("../../src/shouty.js")

const { Given, When, Then, Before } = require("@cucumber/cucumber")
const { assertThat, is } = require("hamjest")

Before(function() {
  this.network = new Network()
  this.people = {}
})

Given('a person named {word}', function (name) {
  this.people[name] = new Person(this.network)
});

// Given('{person} is located/standing {int} metre(s) from {person}', function (lucy, distance, sean) {
//   this.lucy = lucy
//   this.sean = sean
//   this.lucy.moveTo(distance)
// });

When('{word} shouts {string}', function (name, message) {
  this.people[name].shout(message)
  this.message = message
});


Then('{word} hears {word}\'s message', function (name1, name2) {
  assertThat(this.people[name1].messageHeard(this.people[name2]), is([this.message]))
});

