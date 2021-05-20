const socketMapa = new WebSocket('ws://localhost:9990/mapa');

socketMapa.addEventListener('message', function (event) {
    const data = JSON.parse(event.data)
    console.log(data)

    if(data.evento == 'desenhaMapa')
    {
        console.log('Evento disparado')
        mapa = data.mapa
        desenhaMapa()
    }
})

var mapa = 'assets/fundo/01.jpg'
var mapaX = 0
var mapaY = 0
var mapaAltura = null
var mapaLargura = null

const PARA_CIMA = 1
const PARA_DIREITA = 2
const PARA_BAIXO = 3
const PARA_ESQUERDA = 4
var posicaoMapa = PARA_CIMA

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

    const data = {
        evento: 'desenhaMapa',
        mapa: mapa,
    };

    socketMapa.send(JSON.stringify(data));
}

function desenhaMapa()
{
    console.log('>> DESENHA MAPA')
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
    switch(posicaoMapa){
        case PARA_CIMA :
            ctxMapa.translate(0, -mapaAltura)
            posicaoMapa = PARA_DIREITA
            break
        case PARA_DIREITA :
            ctxMapa.translate(mapaLargura, -mapaAltura)
            posicaoMapa = PARA_BAIXO
            break
        case PARA_BAIXO :
            ctxMapa.translate(mapaLargura,-mapaLargura)
            posicaoMapa = PARA_ESQUERDA
            break
        case PARA_ESQUERDA :
            ctxMapa.translate(0,-mapaLargura)
            posicaoMapa = PARA_CIMA
            break
    }
    limparMapa()
    desenhaMapa()   
}

function mudarMapa()
{
    posicaoMapa = PARA_CIMA
    mapa = document.getElementById("seletorDeMapas").value
    desenhaMapaPrimeiraVez()
}

function limparMapa()
{
    ctxMapa.clearRect(0, 0, canvasMapa.width, canvasMapa.height)
}
