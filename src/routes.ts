import { Router} from 'express'
import { SettingsController } from './controllers/settingsController'
const routes = Router()
/*
    TIPOS DE PARAMETROS
    *Routes Params - parametros de rotas => http://localhost:3333/settings/23 
    *Query Params - Filtros e Buscas => http://localhost:3333/settings/?search=facebook&
    *Body Params - corpo da req => {message: "Parametros no corpo da req em forma de JSON"}
*/ 
const settingsController = new SettingsController()
routes.post('/settings', settingsController.create)

export {routes}