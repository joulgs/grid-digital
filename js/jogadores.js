var jogadorSelecionado = 0

var jogadores = []
var jogadoresX = []
var jogadoresY = []
var jogadoresNome = []

desenhaJogadores()

function desenhaJogadores()
{
    for(j=0; j<= jogadores.length; j++)
    {
        if(jogadorSelecionado == j)
        {
            desenhaJogador(jogadores[j], jogadoresX[j], jogadoresY[j], true)
        } else {
            desenhaJogador(jogadores[j], jogadoresX[j], jogadoresY[j], false)
        }
    }
}

function desenhaJogador(image, x, y, selecionado)
{
    limparJogadores()
    var play = new Image()
    play.src = image
    play.onload = function()
    {
        ctxJogadoes.drawImage(play,tamanhoDoQuadrado*x,tamanhoDoQuadrado*y,tamanhoDoQuadrado,tamanhoDoQuadrado)
        if(selecionado)
            ctxJogadoes.fillRect(tamanhoDoQuadrado*x,tamanhoDoQuadrado*y,tamanhoDoQuadrado,tamanhoDoQuadrado)
    }
}

function jogadorParaDireita()
{
    jogadoresX[jogadorSelecionado] += 1
    limparJogadores()
    desenhaJogadores()
}

function jogadorParaEsquerta()
{
    jogadoresX[jogadorSelecionado] -= 1
    limparJogadores()
    desenhaJogadores()
}

function jogadorParaBaixo()
{
    jogadoresY[jogadorSelecionado] += 1
    limparJogadores()
    desenhaJogadores()
}

function jogadorParaCima()
{
    jogadoresY[jogadorSelecionado] -= 1
    limparJogadores()
    desenhaJogadores()
}

function mudarJogador()
{
    jogadorSelecionado = document.getElementById("seletorJogadores").value;
    limparJogadores()
    desenhaJogadores()
}

function mudarSkin()
{
    jogadores[jogadorSelecionado] = document.getElementById("seletorSkin").value;
    limparJogadores()
    desenhaJogadores()
}

function novoJogador()
{
    var nome = prompt('NOME:')
    jogadores.push("assets/totens/01.png")
    jogadoresX.push(0)
    jogadoresY.push(0)
    jogadoresNome.push(nome)

    var select = document.getElementById("seletorJogadores")
    var option = document.createElement("option")
    option.text = nome
    option.value = jogadores.length-1
    select.add(option)

    jogadorSelecionado = jogadores.length-1
    select.value = jogadorSelecionado

    limparJogadores()
    desenhaJogadores()
}

function deletaJogador()
{
    jogadores.splice(jogadorSelecionado,1)
    jogadoresX.splice(jogadorSelecionado,1)
    jogadoresY.splice(jogadorSelecionado,1)
    jogadoresNome.splice(jogadorSelecionado,1)

    criaSeletorDeJogador()

    limparJogadores()
    desenhaJogadores()
}

function criaSeletorDeJogador()
{
    var select = document.getElementById("seletorJogadores")
    select.innerHTML = ''

    for(i = 0; i <= jogadores.length-1; i++)
    {
        var option = document.createElement("option")
        option.text = jogadoresNome[i]
        option.value = i
        select.add(option)
    }
}

function limparJogadores()
{
    ctxJogadoes.clearRect(0, 0, canvasJodadores.width, canvasJodadores.height)
}
