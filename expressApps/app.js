//express retorna uma função
const express = require('express');

//express app
const app = express();

// listen for requests
app.listen(3000);

//Ao invés de utilizar 
app.get('/',(req,res)=>{
    res.send("<h1>DEU CERTOOOOOOOOOOOOOOOOOOOOOOOOO</h1>");
});

app.get('/about',(re,res)=>{
    
});
