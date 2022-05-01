const fs = require('fs');

//Com as streams podemos ter acesso aos fragmentos 
//dos dados enquanto estão sendo carregados
const readStream = fs.createReadStream('./CourseNodeJs/docs/blog3.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream("./CourseNodeJs/docs/blog2.txt");

//Leitura e gravação de dados de uma stream em outro arquivo
readStream.on('data',(chunk) => {
    console.log('----NEW CHUNK----');
    console.log(chunk);
    //Funções utilizadas para escrever os dados em outros arquivos
    writeStream.write('\n NEW CHUNK\n');
    writeStream.write(chunk);
});

//piping (Uma forma mais curta de salvar os dados no arquivo)
readStream.pipe(writeStream);

//Através do duplex stream podemos ler e escrever