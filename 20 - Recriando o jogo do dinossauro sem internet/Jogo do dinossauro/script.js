const dino = document.querySelector('.dino');
/* pega a página inteira (via document) e selciona o dino para dentro da constante */

const background = document.querySelector('.background');
let estaPulando = false;
let posicao = 0; // posição inicial do dinossauro

function lidarComKeyUp(evento) { // o evento é enviado para a função toda vez que alguém pressiona uma tecla pelo navegador
    if (evento.keyCode === 32) {
        if(!estaPulando) {
            pular();
        }
        // site keycode.info para procurar os códigos das teclas
    }
}

function pular() { // função responsável pelo pulo do dinossauro
    
    estaPulando = true;

    let paraCima = setInterval (() => { // setInterval serve para definir intervalos. Tudo que estiver dentro do bloco será executado sem parar no intervalo definido (no caso, a cada 20 milissegundos).
        
        if (posicao >= 150) { // subir até 150 pixels
            clearInterval(paraCima);

            // Descida
            let paraBaixo = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(paraBaixo);
                    estaPulando = false;
                } else {
                    posicao = posicao - 20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20)
        } else {
            // Subida
            posicao = posicao + 20; // a cada 20 milissegundos, acrescenta mais 20
            dino.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criarCactos() {
    const cactos = document.createElement('div'); // gerar uma div no html utilizando javascript
    let posicaoCactos = 1000;
    let tempoAleatorio = Math.random() * 8000; // random gera um número aleatório entre 0 e 1
    
    cactos.classList.add('cactos'); // criar uma classe para adicionar estilos via css
    cactos.style.left = 1000 + 'px';
    background.appendChild(cactos);

    let paraEsquerda = setInterval(() => {
        posicaoCactos = posicaoCactos - 10;
        cactos.style.left = posicaoCactos + 'px';

        if(posicaoCactos < -60) {
            clearInterval(paraEsquerda);
            background.removeChild(cactos); // remove o elemento filho
        } else if(posicaoCactos > 0 && posicaoCactos < 60 && posicao < 60) {
            // game over
            clearInterval(paraEsquerda);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!</h1>';
        } else {
            posicaoCactos = posicaoCactos - 10;
            cactos.style.left = posicaoCactos + 'px';
        }
    }, 20);

    setTimeout(criarCactos, tempoAleatorio); // setTimeout executa uma determinada função depois de um determinado tempo
    // recursividade -> função invocando ela mesma de dentro dela
}

criarCactos();
document.addEventListener('keyup', lidarComKeyUp);
/* 
Tudo que é feito no navegador gera eventos. O addEventListener escuta esses eventos.
keyup é quando ao pressionar a tecla gera o evento de abaixar a tecla (keydown) e ao soltar a tecla, a tecla sobe e cria o evento de subir a tecla (keyup) 
*/