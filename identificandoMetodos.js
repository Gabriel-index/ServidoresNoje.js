const http = require('http')

const server = http.createServer((req, res) => {
    // Escreva no console o tipo de método da requisição que está sendo feita (sendo GET, POST, PUT ou DELETE)
    console.log(req.method);
    // WRITEHEAD permite passar tanto o status code o tipo de dado que será respondido pelo servidor.
    // Neste caso:
    // Status code = 200 e O dado será um texto simples
    res.writeHead(200, {'Content-type' : 'text/plain'})
    res.end(`Método recebido: ${req.method}`);
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('http://localhost:3000');
});