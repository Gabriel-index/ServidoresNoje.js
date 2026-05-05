const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type': 'text/plain"})
    if (req.url === "/") {
        res.end(`Está é página inicial. E o metodo: ${req.method}`)
        console.log(req.method)
    } else if (req.url === "/contato") {
        res.end("Tela de contatos");
        console.log(req.method)
    } else if (req.url === "/feemDeus") {
        res.end("Tenha fé em Deus!")
        console.log(req.method)
    } else if (req.url === "/naosei") {
        res.end("Nao sei mais")
        console.log(req.method)
    } else {
        res.end("Tela nem existe fi")
        console.log(req.method)
    }
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
});