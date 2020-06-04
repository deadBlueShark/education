const counter = require('./lib/loaded');

counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount()); // 2
