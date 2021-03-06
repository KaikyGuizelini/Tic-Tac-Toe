var jogador = "X";
var quantidadeJogadas = 0;
var jogoFinalizado = false;
var pontuacaoX = 0;
var pontuacaoO = 0;
var ganhou = true;
function jogar(button) {
    if(jogoFinalizado) {
        return;
    }

    button.innerHTML = jogador;
    jogoFinalizado = validarJogo();

    setTimeout(function() {
        quantidadeJogadas++;
        ganhou = true;
        if(jogoFinalizado) {
            alert("Jogador " + jogador + " venceu!!!");
            if(jogador === "X") {
                pontuacaoX++;
            } else {
                pontuacaoO++;
            }
            ganhou = false;
            resetar();
        } else if(quantidadeJogadas === 9) {
            alert("Jogo empatado!!!");
        } 
        
        if(ganhou) {
            if(jogador === "X") {
                jogador = "O";
            } else {
                jogador = "X";
            }
        }
    }, 0);
}

function validarJogo() {
    var botoes = document.querySelectorAll(".tabuleiro .botao");

    var validacao = botoes[0].innerHTML !== "&nbsp;" && botoes[0].innerHTML === botoes[1].innerHTML && botoes[0].innerHTML === botoes[2].innerHTML ||
    botoes[3].innerHTML !== "&nbsp;" && botoes[3].innerHTML === botoes[4].innerHTML && botoes[3].innerHTML === botoes[5].innerHTML ||
    botoes[6].innerHTML !== "&nbsp;" && botoes[6].innerHTML === botoes[7].innerHTML && botoes[6].innerHTML === botoes[8].innerHTML ||
    botoes[0].innerHTML !== "&nbsp;" && botoes[0].innerHTML === botoes[3].innerHTML && botoes[0].innerHTML === botoes[6].innerHTML ||
    botoes[1].innerHTML !== "&nbsp;" && botoes[1].innerHTML === botoes[4].innerHTML && botoes[1].innerHTML === botoes[7].innerHTML ||
    botoes[2].innerHTML !== "&nbsp;" && botoes[2].innerHTML === botoes[5].innerHTML && botoes[2].innerHTML === botoes[8].innerHTML ||
    botoes[0].innerHTML !== "&nbsp;" && botoes[0].innerHTML === botoes[4].innerHTML && botoes[0].innerHTML === botoes[8].innerHTML ||
    botoes[2].innerHTML !== "&nbsp;" && botoes[2].innerHTML === botoes[4].innerHTML && botoes[2].innerHTML === botoes[6].innerHTML;

    return validacao; 
}

function resetar() {
    var botoes = document.querySelectorAll(".tabuleiro .botao");
    botoes.forEach(function(botao, index) {
        if(index < 9) {
            botao.innerHTML = "&nbsp";
        }
    });
    jogador = "X";
    quantidadeJogadas = 0;
    jogoFinalizado = false;
    atualizaPlacar();
}

function atualizaPlacar() {
    var placarX = document.querySelector(".placarX");
    var placarO = document.querySelector(".placarO");

    placarX.innerHTML = "X = " + pontuacaoX;
    placarO.innerHTML = "O = " + pontuacaoO;
}