/*
Método HTPP
GET - buscar informações
POST - Criar 
PUT - Alteração
DELETE - Excluir
PATCH - Alterar uma informação específica
*/

import {http} from './http'
import './websocket/client'
import './websocket/admin'

http.listen(3333, ()=>{
    console.log('Server is running on port 3333') // criação do servidor
})