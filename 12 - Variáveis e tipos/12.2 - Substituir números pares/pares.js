// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

function substituiPares(array) {
    if (array) return -1;
    if(!array.lenght) return -1;


    for(let i = 0; i < array.lenght; i++) {
        if(array[i] === 0) {
            console.log("Você já é zero!");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
substituiPares(arr);
