let x = document.querySelector(".x");
let o = document.querySelector(".o");

let box = document.querySelectorAll(".box");

let botoes = document.querySelectorAll("#id_div_1 button");

let msgBox = document.querySelector("#id_div_5");
let msgText = document.querySelector("#id_div_5 p");

// Botão de jogadores
let jogadorIA;

// Contador de jogadas
let jogador1 = 0;
let jogador2 = 0;

//Adicionado o evento click aos boxes - id_div_2_L1_C1
for (let i = 0; i < box.length; i++) {
    // Quando alguem clicar na caixa
    box[i].addEventListener("click", function () {

        let elem = checkJogador(jogador1, jogador2);

        // Verifica-se se tem x ou o
        if (this.childNodes.length == 0) {

            let cloneElem = elem.cloneNode(true);

            this.appendChild(cloneElem);

            // Computar a jogada
            if (jogador1 == jogador2) {
                jogador1++;

                if (jogadorIA == "id_button_2") {
                    // executar a jogada
                    jogadaIA();

                    jogador2++;
                }
            } else {
                jogador2++;
            }

            // Verifica quem venceu
            quemVenceu();
        }
    });
}

// Eventos para saber se é 2 jogadores ou IA
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function () {
        jogadorIA = this.getAttribute('id');

        for (let ii = 0; ii < botoes.length; ii++) {
            botoes[ii].style.display = "none";
        }

        // aparece o jogo
        setTimeout(function () {
            let div2 = document.querySelector('#id_div_2');
            div2.classList.remove('hide');
        }, 200)
    });
}

function checkJogador(jog1, jog2) {
    if (jog1 == jog2) {
        elem = x;
    } else {
        elem = o;
    }
    return elem;
}

// Verifica quem venceu
function quemVenceu() {
    let b1 = document.getElementById("id_div_2_L1_C1");
    let b2 = document.getElementById("id_div_2_L1_C2");
    let b3 = document.getElementById("id_div_2_L1_C3");

    let b4 = document.getElementById("id_div_2_L2_C1");
    let b5 = document.getElementById("id_div_2_L2_C2");
    let b6 = document.getElementById("id_div_2_L2_C3");

    let b7 = document.getElementById("id_div_2_L3_C1");
    let b8 = document.getElementById("id_div_2_L3_C2");
    let b9 = document.getElementById("id_div_2_L3_C3");

    // Horizontal 1º Linha
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        //Pelo nome da classe verifica se é x ou o
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Horizontal 2º Linha
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        //Pelo nome da classe verifica se é x ou o
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declaraVencedor('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Horizontal 3º Linha
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        //Pelo nome da classe verifica se é x ou o
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Vertical 1º Coluna
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        //Pelo nome da classe verifica se é x ou o
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Vertical 2º Coluna
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        //Pelo nome da classe verifica se é x ou o
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declaraVencedor('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Vertical 3º Coluna
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        //Pelo nome da classe verifica se é x ou o
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Diagonal 1
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        //Pelo nome da classe verifica se é x ou o
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Diagonal 2
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        //Pelo nome da classe verifica se é x ou o
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Deu Velha
    let conta = 0;
    for (let i = 0; i < box.length; i++) {
        if (box[i].childNodes[0] != undefined) {
            conta++;
        }
    }
    if (conta == 9) {
        declaraVencedor('Deu Velha');
    }
}

// Limpar o jogo e declara o vencedor
function declaraVencedor(vencedor) {
    let placarX = document.querySelector('#id_span_2');
    let placarO = document.querySelector('#id_span_4');
    let msg = "";

    if (vencedor == 'x') {
        placarX.textContent = parseInt(placarX.textContent) + 1;
        msg = "O Jogador 1 Venceu!";
    } else if (vencedor == 'o') {
        placarO.textContent = parseInt(placarO.textContent) + 1;
        msg = "O Jogador 2 Venceu!";
    } else {
        msg = "Deu Velha";
    }

    // Exibindo a mensagem
    msgText.innerHTML = msg;
    msgBox.classList.remove('hide');

    // Esconde a mensagem
    setTimeout(function () {
        msgBox.classList.add('hide');
    }, 2000);

    // Zera as jogadas
    jogador1 = 0;
    jogador2 = 0;

    // Remove x e o
    let boxRemove = document.querySelectorAll('.box div');
    for (let i = 0; i < boxRemove.length; i++) {
        boxRemove[i].parentNode.removeChild(boxRemove[i]);
    }
}

function jogadaIA() {
    let cloneO = o.cloneNode(true);
    let conta = 0;
    let preenche = 0;

    for (let i = 0; i < box.length; i++) {
        let random = Math.floor(Math.random() * 5);

        // Só preenche se estiver vazio o filho
        if (box[i].childNodes[0] == undefined) {
            if (random <= 1) {
                box[i].appendChild(cloneO);
                conta++;
                break;
            } else {
                preenche++; // Quanto estão preenchidos
            }
        }
    }

    if (conta == 0 && preenche < 9) {
        // recursivo
        jogadaIA();
    }
}