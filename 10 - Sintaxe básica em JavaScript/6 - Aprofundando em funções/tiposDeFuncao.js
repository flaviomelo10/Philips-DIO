// tipos de função

// declarativas
function funcao() {
    console.log('Tudo certo!');
}

funcao();

// expressões de funções -  são funções atribuidas a expressões. A nomeação das funções por expressões é opcional

var funcao1 = function funcao1() {
    console.log('Sou uma mensagem de função de expressão!')
}

funcao1();

var funcao2 = function () {
    console.log('Sou uma mensagem de função de expressão!')
}

funcao2();

// arrow function - são funções de expressão de sintaxe curta. Arrow function serão sempre anônimas e, portanto, não podem ser nomeadas
var funcao3 = () => {
    console.log("Sou uma arrow function!")
}

funcao3();