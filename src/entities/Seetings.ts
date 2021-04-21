import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, } from "typeorm"
import {v4 as uuid} from "uuid"

@Entity('settings')
class Setting {

    @PrimaryColumn() // {name: 'nome na tabela'} para referenciar caso queira colocar outro nome
    id: string

    @Column()
    username: string

    @Column()
    chat: boolean

    @UpdateDateColumn()
    updated_at: Date

    @UpdateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Setting}