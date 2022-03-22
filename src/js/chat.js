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