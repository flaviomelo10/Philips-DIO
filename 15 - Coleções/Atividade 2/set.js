/*
Dado o array [30, 30, 5, 40, 223, 2049, 3034, 5] retorne outro array apenas com valores únicos.
*/

const meuArray = [30, 30, 5, 40, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]; // uso da técnica spread para colocar os valores do Set dentro do array.
}

console.log(valoresUnicos(meuArray));