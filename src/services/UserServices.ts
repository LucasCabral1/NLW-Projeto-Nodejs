import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService{
    private usersRepository: Repository<User>
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async create(email: string){
        
       
        // Verificar se o User existe
        const userExists = await this.usersRepository.findOne({
            email
        })
        if(userExists){
            return userExists
        }
        const user = this.usersRepository.create({
            email
        })
        await this.usersRepository.save(user)
        // se não existir, salvar no BD
        return user
    }
    async findByEmail(email: string): Promise<User> {
        const userExists = await this.usersRepository.findOne({
            email
        });

        return userExists;
    }
}
export{UsersService}