// Faça um programa que receba e verifica se a palavra
// está cometendo o seguinte erro de português 
// Antes de "p" ou "b" devemos usar M
// casso a palavra esteja errada informar o erro
// Se não dizer que a palavra esta certa.
// Utilize o método includes()

let rs = require('readline-sync')
let palavra = rs.question("Digite uma palavra: ")
let erros = ["np", "nb"]
let deuErro = false;
for (let i = 0; i < erros.length; i++) {
    if (palavra.includes(erros[i])) {
        deuErro = true;
        break;
    };
}
deuErro  ? console.log('A palavra está escrita de forma errada, antes de "P" e "B" se usa "M". ') : console.log("A palavra está correta, parabéns!! ");

// Em teste  pois não conseguir rodar de forma desejada.