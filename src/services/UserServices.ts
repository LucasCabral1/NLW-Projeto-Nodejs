import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService{
    async create(email: string){
        const usersRepository = getCustomRepository(UsersRepository)
        // Verificar se o User existe
        const userExists = await usersRepository.findOne({
            email
        })
        if(userExists){
            return userExists
        }
        const user = usersRepository.create({
            email
        })
        await usersRepository.save(user)
        // se não existir, salvar no BD
        return user
    }
}
export{UsersService}