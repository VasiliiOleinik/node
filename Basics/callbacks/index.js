const fs = require('fs');

function person(name, callbackFn) {
    console.log(`Hello ${name}`);
    callbackFn();
}

function adress() {
    console.log('I am from CZ');
}

person('John', adress);

fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.log(err);
        return
    } 

    console.log(data)
})