// Faça um programa que receba uma palavra e verifica se 
// ela termina con "al" se terminar com "al" então imprime
// "Palavra não indentificada ".
// Utilize o método endsWith()

let rs = require('readline-sync')
let palavra = rs.question ('Digite uma palavra: ').toLowerCase()

if (palavra.endsWith('al')){
    console.log(palavra)
}else{
    console.log ('Palavra não indentificada.')
}