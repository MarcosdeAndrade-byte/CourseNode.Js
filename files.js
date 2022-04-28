const fs = require("fs");

//ler arquivos(Caminho,funçãoAnonima)
fs.readFile('./CourseNodeJs/docs/blog1.txt',(err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log('Vemos que a execução do código continua');

//Escrever arquivos(Se o arquivo não existir ele cria)
fs.writeFile('./CourseNodeJs/docs/blog1.txt','Deu certo!',() => {
    console.log('Escrevendo......');
});

//Diretórios(Se a pasta existir é retornado um erro)
if(fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) => {
        if(err){
            console.log(err);
        }
        console.log("Arquivo criado");
    });
};

//Deletar um arquivo
if(fs.existsSync('./CourseNodeJs/docs/dele.txt')){
    fs.unlink('./CourseNodeJs/docs/dele.txt',(err)=>{
        if(err){
            console.log("Arquivo já foi deletado");
        }
        console.log("Arquivo deletado");
    })
}