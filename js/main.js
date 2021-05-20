var canvasMapa = document.getElementById("mapa"),
ctxMapa = canvasMapa.getContext("2d")

var canvasTabuleiro = document.getElementById("tabuleiro"),
ctxTabuleiro = canvasTabuleiro.getContext("2d")

var canvasJodadores = document.getElementById("jogadores"),
ctxJogadoes = canvasJodadores.getContext("2d")


var alturaDaTela = window.innerHeight
var larguraDaTela = window.innerWidth
var tamanhoDoQuadrado = 30

canvasMapa.width = larguraDaTela
canvasMapa.height = alturaDaTela-50

canvasTabuleiro.width = larguraDaTela
canvasTabuleiro.height = alturaDaTela-50

canvasJodadores.width = larguraDaTela
canvasJodadores.height = alturaDaTela-50

ctxJogadoes.fillStyle = 'rgba(255, 165, 0,0.2)'

let chat = document.getElementById('chat');
    let input = document.getElementById('input');
    const nome = document.getElementById('nome');
    const socket = new WebSocket('ws://localhost:9990/chat');

    // Ao receber mensagens do servidor
    socket.addEventListener('message', function (event) {
        // Deserializamos o objeto
        const data = JSON.parse(event.data);
        // Escrevemos no DOM
        chat.insertAdjacentHTML('beforeend', "<p><b>" + data.nome + " diz: </b>" + data.mensagem + "</p>");
    });

    // Ao enviar uma mensagem
    input.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            // Objeto com os dados que serão trafegados
            const data = {
                nome: nome.value,
                mensagem: this.value,
            };

            // Serializamos o objeto para json
            socket.send(JSON.stringify(data));

            this.value = '';
        }
    });