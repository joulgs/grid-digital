const socketTabuleiro = new WebSocket('ws://localhost:9990/tabuleiro');

var canvasTabuleiro = document.getElementById("tabuleiro"),
    ctxTabuleiro = canvasTabuleiro.getContext("2d")

canvasTabuleiro.width = larguraDaTela
canvasTabuleiro.height = alturaDaTela

var trava = false

socketTabuleiro.addEventListener('message', function(event) {
    const data = JSON.parse(event.data)

    console.log('Evento disparado')
    tamanhoDoQuadrado = data

    console.log('quadrado: ' + tamanhoDoQuadrado)

    limparTabuleiro()
    desenhaTabuleiro()
})

desenhaTabuleiro()

function desenhaTabuleiro() {
    console.log('>> DESENHA TABULEIRO')

    ctxTabuleiro.beginPath()
    for (x = 0; x <= larguraDaTela; x += tamanhoDoQuadrado) {
        for (y = 0; y <= alturaDaTela; y += tamanhoDoQuadrado) {
            ctxTabuleiro.strokeRect(x, y, tamanhoDoQuadrado, tamanhoDoQuadrado)
        }
    }
    ctxTabuleiro.closePath()
    ctxTabuleiro.stroke()

    if (trava) {
        trava = false
        socketTabuleiro.send(JSON.stringify(tamanhoDoQuadrado));
    }

}

function aumentaQuadrado() {
    trava = true
    limparTabuleiro()
    tamanhoDoQuadrado += 10
    desenhaTabuleiro()
    limparJogadores()
    desenhaJogadores()
}

function diminuirQuadrado() {
    trava = true
    limparTabuleiro()
    tamanhoDoQuadrado -= 10
    desenhaTabuleiro()
    limparJogadores()
    desenhaJogadores()
}

function limparTabuleiro() {
    ctxTabuleiro.clearRect(0, 0, canvasTabuleiro.width, canvasTabuleiro.height)
}