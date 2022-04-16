var jogador1 = 0;
var jogador2 = 3;
var placar;

// ninho ou aninhamento de if
if (jogador1 != -1) {
    if (jogador1 > 0){
        console.log("Jogador 1 marcou ponto!");
    } else if (jogador2 > 0) {
        console.log("Jogador 2 marcou ponto!");
    } else {
        console.log("Ninguém marcou ponto!");
    }
}

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos!") : console.log("Jogadores inválidos");

// switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou!");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou!");
        break;
    default:
        console.log("Ninguém ganhou!");
}

// estruturas de repetição
// for - executa uma instrução até que ela seja falsa
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// for/in - funciona como uma repetição a partir de uma propriedade
for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

// for/of - funciona como uma repetição a partir de um valor
// não funciona com objetos, pois as proprieadades variam
for (i of array) {
    console.log(i);
}

for (i of object.propriedade1) {
    console.log(i);
}

// while
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

// do/while
do {
    a++;
    console.log(a);
} while (a < 10);