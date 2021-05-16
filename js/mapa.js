var canvas = document.getElementById("fundo"),
ctx = canvas.getContext("2d")

canvas.width = window.innerWidth-200
canvas.height = window.innerHeight

var mapa = document.getElementById('seletorDeMapas').value
var mapaX = 0
var mapaY = 0
var mapaAltura = null
var mapaLargura = null

desenhaMapaPrimeiraVez()

function desenhaMapaPrimeiraVez()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    var image = new Image()
    image.src = mapa
    image.onload = function()
    {
        mapaAltura = this.height
        mapaLargura = this.width
        ctx.drawImage(image,mapaX,mapaY)
    }
}

function desenhaMapa()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    var image = new Image()
    image.src = mapa
    image.onload = function()
    {
        ctx.drawImage(image,mapaX,mapaY, mapaLargura, mapaAltura)
    }
}

function mapaParaEsquerda() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mapaX -= 10
    desenhaMapa()
}

function mapaParaDireita() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mapaX += 10
    desenhaMapa()
}

function mapaParaCima() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mapaY -= 10
    desenhaMapa()
}

function mapaParaBaixo() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mapaY += 10
    desenhaMapa()
}

function mapaParaBaixo() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mapaY += 10
    desenhaMapa()
}

function mapaMenosZoom()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mapaAltura -= 10
    mapaLargura -= 10
    desenhaMapa()
}

function mapaMaisZoom()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mapaAltura += 10
    mapaLargura += 10
    desenhaMapa()
}

function rotacionarMapa()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.rotate(90 * Math.PI / 180);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.translate(0, -canvas.width)
    desenhaMapa()
}

function mudarMapa()
{
    mapa = document.getElementById("seletorDeMapas").value;
    desenhaMapaPrimeiraVez()
}
