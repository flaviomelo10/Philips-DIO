// tipos primitivos

// boolean
var vOUf = false;
console.log(vOUf);
console.log(typeof(vOUf));

// number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//string
var nome = "diana";
console.log(nome);
console.log(typeof(nome));

// como declarar
var variavel;

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuicao = 'diana';

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// comparação idêntica -> compara o valor e o tipo.
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);