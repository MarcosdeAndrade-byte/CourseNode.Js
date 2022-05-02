const http = require('http');

//O objeto req vem carregado de informações sobre as requisições e podemos utilizar isso
const server = http.createServer((req,res) => {
    //O exemplo abaixo retorna a /url e o método de requisição que fazemos ao servidor
    console.log(req.url,req.method);

    //define o tipo de conteúdo cabeçalho 
    res.setHeader('Content-Type','text/html');
    //Através do método write podemos retornar fragmentos de html,json,css e etc...(Existem maneiras melhores)
    res.write('<p>Ola,ninjas</p>');
    res.write('<h3>Ola novamente,ninjas</h3>');
    //Avisamos para o navegador que terminamos de escrever a resposta
    res.end();
});

server.listen(3000,'localhost',() => {
    console.log('Ouvindo as requisições na porta 3000');
});