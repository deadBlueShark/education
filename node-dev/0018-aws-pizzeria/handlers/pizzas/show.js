'use strict'

const pizzas = require('../../data/pizzas.json')

function getPizza(pizzaId) {
  let pizza = pizzaId ? pizzas.find(e => e.id == pizzaId) : null
  if (!pizza) {
    throw new Error('Not found')
  }
  return pizza
}

module.exports = getPizza
