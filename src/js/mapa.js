const socketMapa = new WebSocket('ws://localhost:9990/mapa');

const PARA_CIMA = 1
const PARA_DIREITA = 2
const PARA_BAIXO = 3
const PARA_ESQUERDA = 4

var canvasMapa = document.getElementById("mapa"),
ctxMapa = canvasMapa.getContext("2d")

canvasMapa.width = larguraDaTela
canvasMapa.height = alturaDaTela

const mapaObj = {
    imagem: '',
    x: 0,
    y: 0,
    altura: null,
    largura: null,
    posicao: PARA_CIMA
};

const evento = {
    evento: '',
    mapa: null
};

socketMapa.addEventListener('message', function (event) {
    const data = JSON.parse(event.data)
    console.log(data)

    if(data.evento == 'desenhaMapa')
    {
        console.log('Evento disparado')
        mapaObj = data
        desenhaMapa()
    }
})

desenhaMapaPrimeiraVez()

function desenhaMapaPrimeiraVez()
{
    limparMapa()
    var image = new Image()
    image.src = mapaObj.imagem
    image.onload = function()
    {
        mapaObj.altura = this.height
        mapaObj.largura = this.width
        ctxMapa.drawImage(image,mapaObj.x,mapaObj.y)
    }

     
    evento.evento= 'desenhaMapaPrimeiraVez'
    evento.mapa= mapaObj
    

    socketMapa.send(JSON.stringify(evento));
}

function desenhaMapa()
{
    console.log('>> DESENHA MAPA')
    limparMapa()
    var image = new Image()
    image.src = mapaObj.imagem
    image.onload = function()
    {
        ctxMapa.drawImage(image,mapaObj.x,mapaObj.y, mapaObj.largura, mapaObj.altura)
    }

    evento.mapa= mapaObj

    socketMapa.send(JSON.stringify(evento));
}

function mapaParaEsquerda() 
{
    limparMapa()
    switch(mapaObj.posicao){
        case PARA_CIMA :
            mapaObj.x -= 10
            break
        case PARA_DIREITA :
            mapaObj.y += 10
            break
        case PARA_BAIXO :
            mapaObj.x += 10
            break
        case PARA_ESQUERDA :
            mapaObj.y -= 10
            break
    }
    evento.evento= 'desenhaMapa'
    desenhaMapa()
}

function mapaParaDireita() 
{
    limparMapa()
    switch(mapaObj.posicao){
        case PARA_CIMA :
            mapaObj.x += 10
            break
        case PARA_DIREITA :
            mapaObj.y -= 10
            break
        case PARA_BAIXO :
            mapaObj.x -= 10
            break
        case PARA_ESQUERDA :
            mapaObj.y += 10
            break
    }
    evento.evento= 'desenhaMapa'
    desenhaMapa()
}

function mapaParaCima() 
{
    limparMapa()
    switch(mapaObj.posicao){
        case PARA_CIMA :
            mapaObj.y -= 10
            break
        case PARA_DIREITA :
            mapaObj.x -= 10
            break
        case PARA_BAIXO :
            mapaObj.y += 10
            break
        case PARA_ESQUERDA :
            mapaObj.x += 10
            break
    }
    evento.evento= 'desenhaMapa'
    desenhaMapa()
}

function mapaParaBaixo() 
{
    console.log('mapa.js > mapaParaBaixo()')
    limparMapa()
    switch(mapaObj.posicao){
        case PARA_CIMA :
            mapaObj.y += 10
            break
        case PARA_DIREITA :
            mapaObj.x += 10
            break
        case PARA_BAIXO :
            mapaObj.y -= 10
            break
        case PARA_ESQUERDA :
            mapaObj.x -= 10
            break
    }
    evento.evento= 'desenhaMapa'
    desenhaMapa()
}

function mapaMenosZoom()
{
    limparMapa()
    mapaObj.altura -= (mapaObj.altura*0.1)
    mapaObj.largura -= (mapaObj.largura*0.1)
    evento.evento= 'desenhaMapa'
    desenhaMapa()
}

function mapaMaisZoom()
{
    limparMapa()
    mapaObj.altura += (mapaObj.altura*0.1)
    mapaObj.largura += (mapaObj.largura*0.1)
    evento.evento= 'desenhaMapa'
    desenhaMapa()
}

function rotacionarMapa()
{
    limparMapa()
    ctxMapa.rotate(90 * Math.PI / 180);
    limparMapa()
    switch(mapaObj.posicao){
        case PARA_CIMA :
            ctxMapa.translate(0, -mapaObj.altura)
            mapaObj.posicao = PARA_DIREITA
            break
        case PARA_DIREITA :
            ctxMapa.translate(mapaObj.largura, -mapaObj.altura)
            mapaObj.posicao = PARA_BAIXO
            break
        case PARA_BAIXO :
            ctxMapa.translate(mapaObj.largura,-mapaObj.largura)
            mapaObj.posicao = PARA_ESQUERDA
            break
        case PARA_ESQUERDA :
            ctxMapa.translate(0,-mapaObj.largura)
            mapaObj.posicao = PARA_CIMA
            break
    }
    evento.evento= 'rotacionarMapa'
    desenhaMapa()
    console.log(mapaObj)
}

function mudarMapa()
{
    mapaObj.posicao = PARA_CIMA
    mapaObj.imagem = document.getElementById("seletorDeMapas").value
    desenhaMapaPrimeiraVez()
}

function limparMapa()
{
    ctxMapa.clearRect(0, 0, canvasMapa.width, canvasMapa.height)
}
