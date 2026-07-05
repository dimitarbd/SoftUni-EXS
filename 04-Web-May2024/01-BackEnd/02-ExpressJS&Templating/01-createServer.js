const { createServer } = require('http');

const html = `
<form method="POST">
    <h1>Send data to server</h1>
    <input name="data">
    <input type="submit">
</form>
`;

createServer ((req, res) => {
    if (req.method == 'GET') {
        res.write(html);
        res.end();
    } else if (req.method == 'POST') {
        req.highWaterMark = 3;
        console.log('POST request');

        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
            console.log('Receiving data', chunk.toString());
        });
        req.on('end', () => {
            console.log('Stream ended');
        });

        res.statusCode = 204;
        res.end();
    }
}).listen(3000);