const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// initialize socket for server
const io = socketio(server, {
    cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.static('public'));

const users = new Set();

// initialize socket for server
io.on('connection', (socket) => {
    console.log('New connection');

    // handle users when they join the chat
    socket.on('join', (username) => {
        users.add(username);

        // send the new user to all clients
        io.emit('userJoined', username);

        // send the list of users to all clients
        io.emit('userList', Array.from(users));
    })

    // handle incoming messages
    socket.on('chatMessage', (message) => {
        // send the message to all clients
        io.emit('chatMessage', message); 
    })
})

// handle users when they leave the chat

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})