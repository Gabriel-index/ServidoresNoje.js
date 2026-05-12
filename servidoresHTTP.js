const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.end('Servidor Rodando');
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});