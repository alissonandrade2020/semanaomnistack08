const express = require('express')
const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);
const cors = require('cors')

const routes = require('./routes.js')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = {}

io.on('connection', socket => {
    const { user } = socket.handshake.query
    connectedUsers[user] = socket.id
    console.log('Client connectet:', user )

})

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pxow5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)