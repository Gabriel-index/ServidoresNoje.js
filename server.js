// Importando apenas a função de createServer do Módulo
// Http do Node.js
const {createServer} = require('node:http');

const hostname = "127.0.0.1"; //Localhost
const port = 3000;

// Criando servidor

const server = createServer((req, res) => {
    res.statusCode = 200; //Sucesso

    // Define o tipo de conteúdo resposta
    res.setHeader('Content-Type', 'text/plain');
    res.end('Servidor Funcionando!!!!')
});

server.listen(port, hostname, () => {
    console.log(`Server runnin at http://${hostname}:${port}/`);
});