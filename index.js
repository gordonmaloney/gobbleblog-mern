import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import http from 'http'
import { Server, Socket } from "socket.io";

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js';

import { addUser, removeUser, getUser, getUsersInRoom } from './socketUsers.js'

const router = express.Router();

dotenv.config();

const app = express();

const server = http.createServer(app);
const io = new Server(server , {
    cors: {
      origins:["*"],
      methods: ["GET", "POST"]
    }
  })

  io.on('connection', (socket) => {
    console.log('We have a new connection!!');
    
    socket.on('join', ({name, room}, callback) => {
      const { error, user } = addUser({id: socket.id, name, room});

      if (error) return callback(error)

      socket.emit('message', {user: 'admin', text: `${user.name} welcome to the room ${user.room}`})

      socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the room ${user.room}`})

      socket.join(user.room);

      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) } )

      callback()
    })

    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);

      io.to(user.room).emit('message', {user: user.name, text: message})
      io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})

      callback();
    })

    socket.on('disconnection', () => {
        console.log("user has disconnected")
        const user = removeUser(socket.id);

        if (user) {
          io.to(user.room).emit('message', {user: "admin", text: `${user.name} has left the room`})
        }
    })
})

app.use(bodyParser.json({limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoutes)
app.use('/users', userRoutes)
app.use(router);

app.get('/', (req, res) => {
    res.send('API running')
})

const PORT = process.env.PORT

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));  

//server.listen(5001, () => console.log(`Socket Server has started on port 5001`));