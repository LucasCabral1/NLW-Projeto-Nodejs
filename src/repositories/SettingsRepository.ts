import {Repository, EntityRepository} from "typeorm"
import { Setting } from "../entities/Seetings";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{

}

export{SettingsRepository}