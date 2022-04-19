/*
Validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função.
Caso contrário, um erro será lançado.
- crie uma função que recebe um array e um número.
- realize as seguintes validações:
   - se os parâmetros não forem enviados, lance um erro do tipo RefereneError;
   - se o array não for do tipo 'object', lance um erro do tipo TypeError;
   - se o número não for do tipo 'number', lance um erro do tipo TypeError;
   - se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError.
- utilize a declaração try...catch.
- filtre as chamadas de catch porcada tipo de erro utilizando o operador instanceof.
*/

function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho inválido!");

        return arr;
    } 
    catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(error.message);
        } else if(error instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(error.message);
        } else if(error instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(error.message);
        } else {
            console.log("Tipo de erro não encontrado:" + error);
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));