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
    res.render('index');
});


app.get('/about',(re,res)=>{
    res.render('about');
});


//A função use é utilizada para criar middleware e acionar funções de middleware no Express
//Se nenhuma das requisições funcionar retornamos um erro 404
app.use((req,res)=>{
    res.status(404).render('404');
});