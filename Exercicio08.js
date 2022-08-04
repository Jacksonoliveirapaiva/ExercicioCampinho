// [O censor] - Faça um programa que receba uma frase e 
// troque a palavra 'besta' por 'estrume' . 
// Utilize o método replace()

let rs = require('readline-sync')

let frase = rs.question('Digite uma frase com a palavra "bosta": \n ')

let reformulando = frase.replace('bosta','estrume')

console.log(reformulando)