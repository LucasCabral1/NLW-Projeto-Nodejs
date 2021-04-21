import express from 'express' // ... -> significa que precisa ser instalado a tipagem do express
import './database/index'
const app = express() // executar o express
import {routes} from './routes'

/*
Método HTPP
GET - buscar informações
POST - Criar 
PUT - Alteração
DELETE - Excluir
PATCH - Alterar uma informação específica
*/
app.use(express.json())
app.use(routes)

app.listen(3333, ()=>{
    console.log('Server is running on port 3333') // criação do servidor
})