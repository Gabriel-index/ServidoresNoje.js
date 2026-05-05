// Importando o módulo HTTP do Node.js
// Módulo nativo que permite criar servidores web
const http = require('http');

// Criando um servidor
// Create Server: Recebe uma função que será executada em toda vez que alguém acessar nosso servidor
const server = http.createServer((req, res) => {
    // req(request) = requisição
    // res(response) = resposta

    // Envia uma resposta par ao navegador e finaliza a requisição
    res.end("Meu primeiro servidor")
});

// Faz o servidor escutar a porta 3000
server.listen(3000);

// Portas:
// Porta 3000 > Desenvolvimento (Node, React...)
// Porta 80 > http padrão
// Porta 442 > https
// Porta 5000 > API's
// Porta 8080 > Alternativa pra web