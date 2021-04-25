import {io} from '../http'
import { UsersRepository } from '../repositories/UsersRepository'
import {ConnectionsService} from '../services/ConnectionsServices'
import {UsersService} from '../services/UserServices'
import {MessagesService} from '../services/MessagesServices'


interface IParams{
    text: string
    email: string
}

// eventos relacionado ao cliente
io.on("connect", (socket)=>{
    const connectionsService = new ConnectionsService()
    const usersService = new UsersService()
    const messagesService = new MessagesService()


    socket.on("client_first_access", async (params) =>{
        const socket_id = socket.id
        const {text, email} = params as IParams
        let user_id = null

    // salvar a coneção com o socker_id, user_id
        console.log(params)
        const userExists = await usersService.findByEmail(email)

        if(!userExists){
            const user = await usersService.create(email)
            await connectionsService.create({
                socket_id,
                user_id: user.id
            })

            user_id = user.id

        }else{

            user_id = userExists.id
            const connection = await connectionsService.findByUserId(userExists.id);

            if(!connection){
                await connectionsService.create({
                    socket_id,
                    user_id: userExists.id
                })
            } else{
                connection.socket_id = socket_id
                await connectionsService.create(connection)
            }
            


        }
        await messagesService.create({
            text,
            user_id
        })
    })
})