const http = require('http');
const fs = require('fs');

//O objeto req vem carregado de informações sobre as requisições e podemos utilizar isso
const server = http.createServer((req,res) => {
    //O exemplo abaixo retorna a /url e o método de requisição que fazemos ao servidor
    console.log(req.url,req.method);

    //define o tipo de conteúdo cabeçalho 
    res.setHeader('Content-Type','text/html');
    
    //Enviar um arquivo html(O usuário escolhe a página que quer acessar e selecionamos a rota através do switch)
    let path = 'F:/WS-VSC/CourseNodeJs/Clients&Servers/views/';
    switch(req.url){
        case '/' : path += 'index.html'; break;
        case '/about' : path += 'about.html'; break;
        default: path += '404.html'; break;
    }

    //Se ao ler o Html der erro,imprimimos um erro. Se der certo retornamos um arquivo html
    fs.readFile(path,(err,data)=>{
       if(err){
          console.log(err);
          res.end();
       }else{
          res.end(data);
       }
    });
});

server.listen(3000,'localhost',() => {
    console.log('Ouvindo as requisições na porta 3000');
});