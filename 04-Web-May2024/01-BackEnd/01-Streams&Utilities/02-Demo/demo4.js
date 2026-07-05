const fs = require('fs');

const writer = fs.createWriteStream('./output.js');

// process.stdin.on('data', (chunk) => {
//     writer.write(chunk.toString());
// });

process.stdin.pipe(writer);