const http = require('http'); // use http module to create a server
const port = process.env.PORT || 3000; // set port for listening, default to 3000 if not set

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from DevOps Lab!\n');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});