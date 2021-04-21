import express from 'express' // ... -> significa que precisa ser instalado a tipagem do express
import './database/index'
const app = express() // executar o express

/*
Método HTPP
GET - buscar informações
POST - Criar 
PUT - Alteração
DELETE - Excluir
PATCH - Alterar uma informação específica
*/

app.get("/", (request, response) => {// '/' - rota da URL, req - tudo que o usuario envia, res - a resposta do servidor
    return response.json({
        "message": "Olá NLW 05"
    })
})

app.post("/users", (req, res)=>{
    return res.json({ message: "Usuário salvo com sucesso"})
})


app.listen(3333, ()=>{
    console.log('Server is running on port 3333') // criação do servidor
})