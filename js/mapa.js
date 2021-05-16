var mapa = document.getElementById('seletorDeMapas').value
var mapaX = 0
var mapaY = 0
var mapaAltura = null
var mapaLargura = null

desenhaMapaPrimeiraVez()

function desenhaMapaPrimeiraVez()
{
    limparMapa()
    var image = new Image()
    image.src = mapa
    image.onload = function()
    {
        mapaAltura = this.height
        mapaLargura = this.width
        ctxMapa.drawImage(image,mapaX,mapaY)
    }
}

function desenhaMapa()
{
    limparMapa()
    var image = new Image()
    image.src = mapa
    image.onload = function()
    {
        ctxMapa.drawImage(image,mapaX,mapaY, mapaLargura, mapaAltura)
    }
}

function mapaParaEsquerda() 
{
    limparMapa()
    mapaX -= 10
    desenhaMapa()
}

function mapaParaDireita() 
{
    limparMapa()
    mapaX += 10
    desenhaMapa()
}

function mapaParaCima() 
{
    limparMapa()
    mapaY -= 10
    desenhaMapa()
}

function mapaParaBaixo() 
{
    limparMapa()
    mapaY += 10
    desenhaMapa()
}

function mapaParaBaixo() 
{
    limparMapa()
    mapaY += 10
    desenhaMapa()
}

function mapaMenosZoom()
{
    limparMapa()
    mapaAltura -= (mapaAltura*0.1)
    mapaLargura -= (mapaLargura*0.1)
    desenhaMapa()
}

function mapaMaisZoom()
{
    limparMapa()
    mapaAltura += (mapaAltura*0.1)
    mapaLargura += (mapaLargura*0.1)
    desenhaMapa()
}

function rotacionarMapa()
{
    limparMapa()
    ctxMapa.rotate(90 * Math.PI / 180);
    limparMapa()
    ctxMapa.translate(0, -canvasMapa.width)
    desenhaMapa()
}

function mudarMapa()
{
    mapa = document.getElementById("seletorDeMapas").value;
    desenhaMapaPrimeiraVez()
}

function limparMapa()
{
    ctxMapa.clearRect(0, 0, canvasMapa.width, canvasMapa.height)
}
