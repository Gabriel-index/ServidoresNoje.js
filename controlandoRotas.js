const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Página Inicial");
    } else if (req.url === "/sobre") {
        res.end("Página sobre");
    } else if (req.url === "/contato") {
        res.end("Página de contatos");
    } else {
        res.end("Página não encontrada");
    };
});

server.listen(3000);