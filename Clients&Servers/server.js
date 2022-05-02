const http = require('http');
const fs = require('fs');

//O objeto req vem carregado de informações sobre as requisições e podemos utilizar isso
const server = http.createServer((req,res) => {
    //O exemplo abaixo retorna a /url e o método de requisição que fazemos ao servidor
    console.log(req.url,req.method);

    //define o tipo de conteúdo cabeçalho 
    res.setHeader('Content-Type','text/html');
    
    //Podemos setar um link para apontar para outro link.Isso é bastante eficiente e faz com 
    //que não tenhamos que perder tempo mudando cada link da nossa página
    let path = 'F:/WS-VSC/CourseNodeJs/Clients&Servers/views/';
    switch(req.url){
        case '/' : 
        path += 'index.html';
        res.statusCode = 200;
        break;

        case '/about' : path += 'about.html';
        res.statusCode = 200;
        break;

        case '/about-me' : //<--- Estamos mudando de /about-me para /about
        res.statusCode = 301;//<--- Mudamos o status code
        res.setHeader('Location','/about'); //<--- Setamos a rota
        res.end();//<--- Damos fim a nossa resposta
        break;

        default: 
        path += '404.html';
        res.statusCode = 400;
        break;
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