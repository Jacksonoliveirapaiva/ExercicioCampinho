// Crie um programa que receba uma palavra e exiba
// quantas consoantes e vogais esse palavra tem.
// EX: Saúde
// 2 consoantes 
// 3 vagais

let rs = require('readline-sync')
let palavra = rs.question('digite uma palavra: ').toLowerCase()

let vagais = 'aeiou'
let numVogais = []
let numConsoantes = []

for (let i = 0; i < palavra.length; i++){
    if (vagais.includes(palavra.charAt(i))){
        numVogais.push(palavra.charAt(i))
        console.log('vogal' , palavra.charAt(i))
}
   else {
    numConsoantes.push(palavra.charAt(i))
    console.log('consoantes' , palavra.charAt(i))
   }
}