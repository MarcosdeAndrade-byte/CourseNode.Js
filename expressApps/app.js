//express retorna uma função
const express = require('express');

//express app
const app = express();

// listen for requests
app.listen(3000);

//Ao invés de utilizar um try/catch podemos direcionar cada requisição para sua página utilizando o  Express
app.get('/',(req,res)=>{
    res.sendFile('F:/WS-VSC/CourseNodeJs/Clients&Servers/views/index.html');
});


app.get('/about',(re,res)=>{
    //Através da função sendFile podemos retornar um arquivo do nosso diretório
    res.sendFile('F:/WS-VSC/CourseNodeJs/Clients&Servers/views/about.html');
});

//Redirecionamento 
app.get('/about-us',(req,res)=> {
    //respondemos com outra página html
    res.redirect('/about');
});

//A função use é utilizada para criar middleware e acionar funções de middleware no Express
//Se nenhuma das requisições funcionar retornamos um erro 404
app.use((req,res)=>{
    res.status(404).sendFile('F:/WS-VSC/CourseNodeJs/Clients&Servers/views/404.html');
});