// Faça um programa que receba uma palavra e diga se há 
//vogais ou não.
// Utilize o método indexOf()

let rs = require('readline-sync');
let palavra = rs.question("Digite uma palavra: ").toLowerCase()
let temVogal = false;
let vogais = ['a', 'e', 'i', 'o', 'u']
for (let i = 0; i < vogais.length; i++){
    if (palavra.indexOf(vogais[i]) !== -i){
        temVogal = true;
    }
}

temVogal ? console.log('Existe vogais nesta palavra.') : console.log('Não existe vogais nesta palavra.');

// Também não rodou da forma desejada 
// vou continuar verificando onde eu errei