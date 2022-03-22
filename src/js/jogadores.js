var canvasJodadores = document.getElementById("jogadores"),
ctxJogadoes = canvasJodadores.getContext("2d")

canvasJodadores.width = larguraDaTela
canvasJodadores.height = alturaDaTela

var jogadorSelecionado = 0
var podeMoveComMouse = false

var jogadores = []
var jogadoresX = []
var jogadoresY = []
var jogadoresNome = []

var normalHighlight = 'rgba(255, 165, 0,0.2)'
var podeMoverHighlight = 'rgba(20, 255, 50,0.2)'

ctxJogadoes.fillStyle = normalHighlight

desenhaJogadores()
canvasJodadores.addEventListener('click', pegaPosicaoDoClique, true);

function desenhaJogadores()
{
    if(jogadores.length != 0)
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
}

function desenhaJogador(image, x, y, selecionado)
{
    limparJogadores()
    var play = new Image()
    play.src = image
    play.onload = function()
    {
        if(selecionado) {
            if(podeMoveComMouse) {
                ctxJogadoes.fillStyle = podeMoverHighlight
            } else {
                ctxJogadoes.fillStyle = normalHighlight
            }

            ctxJogadoes.fillRect(tamanhoDoQuadrado*x,tamanhoDoQuadrado*y,tamanhoDoQuadrado,tamanhoDoQuadrado)
        }
        ctxJogadoes.drawImage(play,tamanhoDoQuadrado*x,tamanhoDoQuadrado*y,tamanhoDoQuadrado,tamanhoDoQuadrado)
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

function selecionaJogador()
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
    podeMoveComMouse = false
    document.getElementById("checkPodeMoverComMouse").checked = false

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
    podeMoverComMouse(false)
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

function pegaPosicaoDoClique(evt){
   
    var posX = parseInt(evt.clientX/tamanhoDoQuadrado)
    var posY = parseInt(evt.clientY/tamanhoDoQuadrado)
    
    selecionaJogadorPorPosicao(posX,posY)
}

function selecionaJogadorPorPosicao(x,y)
{
    if(podeMoveComMouse)
    {
        jogadoresX[jogadorSelecionado] = x
        jogadoresY[jogadorSelecionado] = y
        desenhaJogadores()
        podeMoverComMouse(false)
    } else {
        for(i=0; i<= jogadores.length; i++)
        {
            if(jogadoresX[i]==x && jogadoresY[i]==y)
            {
                jogadorSelecionado = i
                document.getElementById("seletorJogadores").value = i
                podeMoverComMouse(true)
                desenhaJogadores()
            }
        }
    }
}

function podeMoverComMouse(bool = false)
{
    document.getElementById("checkPodeMoverComMouse").checked = bool
    podeMoveComMouse = bool
}

function permiteMoverComMouse()
{
    var checkBox = document.getElementById("checkPodeMoverComMouse")
    if (checkBox.checked == true){
        podeMoveComMouse = true
    } else {
        podeMoveComMouse = false
    }
}

document.querySelector('body').addEventListener('keydown', function(evt) {
    console.log(evt.keyCode)
    if(evt.key == 'ArrowLeft')
        jogadorParaEsquerta()
    
    if(evt.key == 'ArrowUp')
        jogadorParaCima()
    
    if(evt.key == 'ArrowDown')
        jogadorParaBaixo()
    
    if(evt.key == 'ArrowRight')
        jogadorParaDireita()
        
})