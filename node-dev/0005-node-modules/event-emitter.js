const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('customEvent', (second, third) => {
  console.log(`${second} ${third}`);
})

emitter.emit('customEvent', 'AAAA', 'BBBB');
emitter.emit('customEvent', 'CCCC', 'DDDD');

process.stdin.on('data', data => {
  if (data.toString().trim() != 'exit') {
    emitter.emit('customEvent', 'Your type: ', data);
  } else {
    emitter.emit('customEvent', 'Goodbye,', 'see ya later!')
    process.exit();
  }
})
