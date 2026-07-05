const fs = require('fs');

const data = fs.readFile('./demo.html', (err, data) => {
    if (err != null) {
        console.error('Error encountered');
        return;
    }
});
console.log(data.toString());