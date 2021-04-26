import express, { response } from 'express' // ... -> significa que precisa ser instalado a tipagem do express
import {createServer} from 'http'
import {Server, Socket} from 'socket.io'
import './database/index'
const app = express() // executar o express
import {routes} from './routes'
import path from 'path'

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/pages/client", (req, res) =>{
    return res.render("html/client.html")
})

app.get("/pages/admin", (req, res) =>{
    return res.render("html/admin.html")
})

const http = createServer(app) // criando o HTTP
const io = new Server(http) // criando o WS

io.on("connection", (socket:Socket) =>{
    console.log('Conectando o WS', socket.id)
})


app.use(express.json())
app.use(routes)

export {http, io}