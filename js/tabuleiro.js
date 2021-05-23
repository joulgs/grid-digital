var canvasTabuleiro = document.getElementById("tabuleiro"),
ctxTabuleiro = canvasTabuleiro.getContext("2d")

canvasTabuleiro.width = larguraDaTela
canvasTabuleiro.height = alturaDaTela

desenhaTabuleiro()

function desenhaTabuleiro()
{
    ctxTabuleiro.beginPath()
    for(x = 0; x <= larguraDaTela; x += tamanhoDoQuadrado)
    {
        for(y = 0; y <= alturaDaTela; y += tamanhoDoQuadrado)
        {
            ctxTabuleiro.strokeRect(x, y, tamanhoDoQuadrado, tamanhoDoQuadrado)
        }
    }
    ctxTabuleiro.closePath()
    ctxTabuleiro.stroke()
}

function aumentaQuadrado()
{
    limparTabuleiro()
    tamanhoDoQuadrado += 10
    desenhaTabuleiro()
    limparJogadores()
    desenhaJogadores()
}

function diminuirQuadrado()
{
    limparTabuleiro()
    tamanhoDoQuadrado -= 10
    desenhaTabuleiro()
    limparJogadores()
    desenhaJogadores()
}

function limparTabuleiro()
{
    ctxTabuleiro.clearRect(0, 0, canvasTabuleiro.width, canvasTabuleiro.height)
}

