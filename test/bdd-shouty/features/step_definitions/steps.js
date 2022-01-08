const Person = require("../../src/shouty.js")
const { Given, When, Then } = require("@cucumber/cucumber")
const { assertThat, is } = require("hamjest")

Given('Lucy is located {int} metres from Sean', function (distance) {
  this.lucy = new Person()
  this.sean = new Person()
  this.lucy.moveTo(distance)
});

When('Sean shouts {string}', function (message) {
  this.sean.shout(message)
  this.message = message
});


Then('Lucy hears Sean\'s message', function () {
  assertThat(this.lucy.messageHeard(), is([this.message]))
});

