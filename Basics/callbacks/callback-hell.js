const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.log(err);
        return
    } 

    const modifiedData = data.toString().toUpperCase();

    fs.writeFile('output.txt', modifiedData, (err) => {
        if (err) {
            console.log(err);
            return
        }

        console.log('File has been written');

        fs.readFile('output.txt', (err, data) => {
            if (err) {
                console.log(err);
                return
            }

            console.log(data.toString());
        })
    })
})