//Um servidor tem como objetivo atender as solicitações recebidas
//do navegador,ele pode retornar uma página HTML,JSON,css e etc...

//Os computadores especiais que hospedam sites na internet recebem
//o nome de host e tem um IP para identifica-los, para se conectar
//a qualquer site devemos escrever seu endereço IP,ou de forma mais
//simples,podemos apenas digitar o domínio associado ao site.

//Diferente de outras linguagens em Node criamos o servidor do absoluto 
//zero.

//Importamos o módulo http para criar um servidor
const http = require('http');

//Armazenamos uma instância do nosso servidor na constante server
//o método createServer cria um servidor
//O método req vem carregado de informações sobre as requisições 
//O método res é utilizado para enviar respostas ao usuário
const server = http.createServer((req,res) => {
    console.log("Requisições feitas");
});

server.listen(3000,'localhost',() => {
    console.log('Ouvindo as requisições na porta 3000');
});