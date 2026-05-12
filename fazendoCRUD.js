const http = require('http');

let livros = [
    {
        id: 1,
        titulo: 'O pequeno Principe',
        autor: 'Antonie de Saint-Exupéry',
    }
];

const server = http.createServer((req, res) => {
    const metodo = req.method;
    const url = req.url;
    res.setHeader('Content-Type', 'application/JSON');

    // Construindo o método GET - Listar Livros
    if (url === '/livros' && metodo === 'GET') {
        res.statusCode = 200;
        // Retornara a lista de livros em formato JSON
        res.end(JSON.stringify(livros));
        return; // Encerra a execução dessa requisição;
    };

    // Contruindo o método POST - Cadastrar livro
    if (url === '/livros' && metodo === 'POST') {
        // Variável para armazenar os dados enviados no body
        let body = '';
        // Evento disparado quando chegam pedaçõs da requisição
        req.on('data', parte => {
            body += parte; //Concatena os pedaços
        });
        // Evemto a ser disparado depois que todos os dados chegarem
        req.on('end', () => {
            const novoLivro = JSON.parse(body);
            // Adiciona o novo livro na Array de livros
            livros.push(novoLivro)
            res.statusCode = 201; //Criado com sucesso

            res.end(JSON.stringify({
                mensagem: 'Livro criado com sucesso',
                livros : novoLivro
            }));
        });
        return; //Encerra a requisição
    };

    // Construindo o método PUT - Atualizar livro
    if (url === '/livros' && metodo === 'PUT') {
        // Variável para armazenar os dados enviados no body
        let body = '';
        // Evento disparado quando chegam pedaçõs da requisição
        req.on('data', parte => {
            body += parte; //Concatena os pedaços
        });
         res.end(JSON.stringify({
        mensagem: 'Rota não encontrada'
        }));
        req.on('end', () => {
            const livroAtualizado = JSON.parse(body)
            
            livros = livros.map(livro => {
                if(livro.id === livroAtualizado.id) {
                    return livroAtualizado;
                };
                return livro;
            });
            res.statusCode = 200;
            res.end(JSON.stringify({
                mensagem: 'Livro atualizado com sucesso',
                livros: livros
            }));
        });
        return;
    };

    // Rota não encontrada 
    res.statusCode= 404; // Não encontrado
    // Convertendo a resposta em JSON e exibindo a mensagem
});

server.listen(3000, () => {
    console.log(("Server running in http://localhost:3000"))
})