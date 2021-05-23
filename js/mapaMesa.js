const socketMapa = new WebSocket('ws://localhost:9990/mapa');

const PARA_CIMA = 1
const PARA_DIREITA = 2
const PARA_BAIXO = 3
const PARA_ESQUERDA = 4

var canvasMapa = document.getElementById("mapa"),
ctxMapa = canvasMapa.getContext("2d")

canvasMapa.width = larguraDaTela
canvasMapa.height = alturaDaTela

mapaObj = {}

socketMapa.addEventListener('message', function (event) {
    const data = JSON.parse(event.data)
    console.log(data)

    console.log('Evento disparado')
    mapaObj = data.mapa

    if( data.evento =='desenhaMapaPrimeiraVez')
    {
        desenhaMapaPrimeiraVez()
    }

    if( data.evento =='desenhaMapa')
    {
        desenhaMapa()
    }

    if( data.evento =='rotacionarMapa')
    {
        rotacionarMapa()
    }
})

function desenhaMapaPrimeiraVez()
{
    console.log('>> DESENHA MAPA PRIMEIRA VEZ')
    limparMapa()
    var image = new Image()
    image.src = mapaObj.imagem
    image.onload = function()
    {
        mapaObj.altura = this.height
        mapaObj.largura = this.width
        ctxMapa.drawImage(image,mapaObj.x,mapaObj.y)
    }
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

    const evento = {
        nome: 'desenhaMapa',
        mapa: mapaObj,
    };

    socketMapa.send(JSON.stringify(evento));
}

function rotacionarMapa()
{
    limparMapa()
    ctxMapa.rotate(90 * Math.PI / 180);
    limparMapa()
    switch(mapaObj.posicao -1){
        case PARA_CIMA :
            console.log('entrou222')    
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
    limparMapa()
    desenhaMapa()   
}

function limparMapa()
{
    ctxMapa.clearRect(0, 0, canvasMapa.width, canvasMapa.height)
}
