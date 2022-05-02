const http = require('http');
const fs = require('fs');

//O objeto req vem carregado de informações sobre as requisições e podemos utilizar isso
const server = http.createServer((req,res) => {
    //O exemplo abaixo retorna a /url e o método de requisição que fazemos ao servidor
    console.log(req.url,req.method);

    //define o tipo de conteúdo cabeçalho 
    res.setHeader('Content-Type','text/html');
    
    //Enviar um arquivo html
    fs.readFile('f:/WS-VSC/CourseNodeJs/Clients&Servers/views/index.html',(err,data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000,'localhost',() => {
    console.log('Ouvindo as requisições na porta 3000');
});