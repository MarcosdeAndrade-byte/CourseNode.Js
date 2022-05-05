console.log("SERVIDOR RODANDO NA PORTA 3000");

//express retorna uma função
const express = require('express');

//express app
const app = express();

//register view engine (Vamos criar tamplates através do ejs para retornar dados do banco mais facilmente)
// O app.set nos permite configurar algumas configurações do aplicativo
app.set('view engine','ejs'); 

// listen for requests
app.listen(3000);

//Ao invés de utilizar um try/catch podemos direcionar cada requisição para sua página utilizando o  Express
app.get('/',(req,res)=>{
    //Criamos blogs falsos apenas para testar o EJS e sua capacidade de executar comandos JS  
    const blogs = [
    {title: 'Testando Blog1', snippet: 'Testando'},
    {title: 'Testando Blog2', snippet: 'Testando'},
    {title: 'Testando Blog3', snippet: 'Testando'}
    ];

    res.render('index',{title:'Home',blogs});
});


app.get('/about',(re,res)=>{
    res.render('about',{title:'about'});
});

app.get ('/blogs/create',(req,res)=> {
    //Criamos um objeto e mandamos para o nosso front-end
    res.render('create',{title:'Create a new Blog'});
});

//A função use é utilizada para criar middleware e acionar funções de middleware no Express
//Se nenhuma das requisições funcionar retornamos um erro 404
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});