// Verifique de duas maneiras diferentes se uma String é um palíndromo

// solução 1
function verificarPalindromo(string) {
    if(!string) return "String  inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("ovo"));

// solução 2
function verificarPalindromo2(string) {
    if (!string) return "String inexistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo2("abba"));