//Faça um aloritmo que receba o nome de dois jogadores e após isso
//peça 5 números de 1 a 10 para cada  jogador. Primeiro para o jogador  A
//e depois para o jogador B.
//Após a escolha de cada jogador o algoritmo deve apresentar quais foram 
//os números que apenas o jogador A colocou diferente do B.
//EX: Jogador A : 1, 2, 3, 4, 5
//Jogador B : 1, 2, 3, 8, 7
//Algoritmo imprime :
//Esse é um problema classicamente conhecido como Left Join

let rs = require('readline-sync')

let  tamanhoDasListas = 5
let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')
console.clear()
let listaJogador1 = []
for (let i = 0; i < tamanhoDasListas; i++){
    let respostaJogador1 = -1
    while (respostaJogador1 < 0 || respostaJogador1 > 10){
        respostaJogador1 = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador1}: `)
    }
    listaJogador1.push(respostaJogador1)
}

console.clear()
let listaJogador2 = []
for (let i = 0; i < tamanhoDasListas; i++){
    let respostaJogador = -1
    while (respostaJogador < 0 || respostaJogador > 10){
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador2}: `)
    }
    listaJogador2.push(respostaJogador)
}

console.clear()
let numerosDiferentes = []
for(let i = 0; i < tamanhoDasListas; i++){
    let itemLista1 = listaJogador1[i]
    if (!listaJogador2.includes(itemLista1)) {
        numerosDiferentes.push(itemLista1)
    }
}
console.log('Estes são os números diferentes: ', numerosDiferentes.join(', '))