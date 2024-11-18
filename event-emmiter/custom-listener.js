const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }

    greet(name) {
        this.emit('greeting', `${this.greeting} ${name}`);
    }
}

const myEmitter = new MyEmitter();

myEmitter.on('greeting', (message) => {
    console.log(`Received message: ${message}`);
})

myEmitter.greet('John');