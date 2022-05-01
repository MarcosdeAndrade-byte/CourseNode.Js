//para importar blocos de código temos que utilizar o require(ARQUIVO)
//podemos utilizar qualquer nome em nossa variável
//Podemos utilizar os {} para retornar apenas os dados que nos interessam
const {people,ages} = require('./people');

console.log("OBJETO PEOPLE:",people);
console.log("PEOPLE AND AGE:",people,ages);

//Podemos utilizar módulos que já vem integrado com o Node,nesse exemplo
//temos um módulo que captura informações do sistema operacional
const os = require('os');
console.log(os.platform(),os.homedir());