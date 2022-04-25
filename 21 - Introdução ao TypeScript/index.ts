console.log('TypeScript');

function soma(a: number, b: number) {
    return a + b;
}
/*
// types utilizado para juntar diferentes interfaces ou definir que uma variável pode ser uma interface

interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface Felino extends Animal {
    visaoNoturna: boolean;
}

interface Canino extends Animal {
    porte: 'pequeno' | 'médio' | 'grande';
}

type Domestico = Felino | Canino;

const animal: Domestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'médio',
    tipo: 'terrestre',
}
*/
// interfaces são usadas para definir contratos (de estrutura de dados, de classe a se definir)
/*
interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibies: number): void;
}

const animal: Animal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibies) => ('${alturaEmDecibeis}dB')
}

interface Felino extends Animal {
    visaoNoturna: boolean;
}

const felino: Felino = {
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}
*/

/*
const input = document.getElementById('input') as HTMLInputElement; // é para o TypeScript saber que o elemento é um input e não um elemento genérico da página (uma div), no caso o valor do input
input.addEventListener('input', (evento) => {
    const i = evento.currentTarget as HTMLInputElement;
    console.log(i.value);
});
*/

// Generic Types
/*
function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1);
*/

/*
interface Usuario {
    id: string;
    email: string;
}

interface Admin extends Usuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: Usuario | Admin) {
    if('cargo' in usuario) {
        // redirecionara para a área de administração
    }

    // redirecionara para a área do usuário
}
*/
/*
// operador ? -> transforma o item em um dado opcional
interface Usuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
    // cargo é um valor que pode ou não estar definido devido ao operador '?'
}

function redirecione(usuario: Usuario) {
    if(usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    // redirecionar para a área do usuário
}

*/
/*
// classe
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K]; // -? remove os valores opcionais
}

class MeuCachorro implements Cachorro {
    idade;
    nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;
*/

/*
import $ from 'jquery';
$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao')
    }
});

$('body').novaFuncao();
*/
/*
// Omit
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {

}
*/