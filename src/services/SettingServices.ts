import {getCustomRepository, Repository} from 'typeorm'
import { Setting } from '../entities/Seetings'
import {SettingsRepository} from '../repositories/SettingsRepository'

interface ISettingsCreate{
    chat: boolean
    username: string
}

class SettingsService{
    private settingsRepository: Repository<Setting>
    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }

    async create({chat, username}: ISettingsCreate){


        
        const userExists = await this.settingsRepository.findOne({
            username
        })
        if(userExists){
            throw new Error("Usuário já existe")
        }

        const settings = this.settingsRepository.create({
            chat,
            username
    })

        await this.settingsRepository.save(settings)
        return settings
    }

    async FindByUsername(username: string){
        const settings = await this.settingsRepository.findOne({
            username
        })
        return settings
    }

    async update(username:string, chat:boolean){
        const settings = await this.settingsRepository.createQueryBuilder().update(Setting)
        .set({username, chat})
        .where("username = :username",{
            username
        }).execute()
        
    }
}

export{SettingsService}