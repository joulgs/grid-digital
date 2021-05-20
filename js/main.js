var canvasMapa = document.getElementById("mapa"),
ctxMapa = canvasMapa.getContext("2d")

var canvasTabuleiro = document.getElementById("tabuleiro"),
ctxTabuleiro = canvasTabuleiro.getContext("2d")

var canvasJodadores = document.getElementById("jogadores"),
ctxJogadoes = canvasJodadores.getContext("2d")


var alturaDaTela = window.innerHeight
var larguraDaTela = areaDoMapa.clientWidth

var tamanhoDoQuadrado = 30

canvasMapa.width = larguraDaTela
canvasMapa.height = alturaDaTela-50

canvasTabuleiro.width = larguraDaTela
canvasTabuleiro.height = alturaDaTela-50

canvasJodadores.width = larguraDaTela
canvasJodadores.height = alturaDaTela-50

ctxJogadoes.fillStyle = 'rgba(255, 165, 0,0.2)'
