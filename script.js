const socket = io();

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const messageContainer = document.getElementById('message-container');

    if (messageInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = messageInput.value;
        messageContainer.appendChild(message);

        socket.emit('message', messageInput.value);

        messageInput.value = '';
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
});

socket.on('message', (message) => {
    const messageContainer = document.getElementById('message-container');
    const receivedMessage = document.createElement('div');
    receivedMessage.className = 'message';
    receivedMessage.textContent = message;
    messageContainer.appendChild(receivedMessage);

    messageContainer.scrollTop = messageContainer.scrollHeight;
});
