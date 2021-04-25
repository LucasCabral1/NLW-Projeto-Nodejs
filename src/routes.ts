import { Router} from 'express'
import { MessagesController } from './controllers/MessagesController'
import { SettingsController } from './controllers/settingsController'
import { UserController } from './controllers/UsersController'
const routes = Router()
/*
    TIPOS DE PARAMETROS
    *Routes Params - parametros de rotas => http://localhost:3333/settings/23 
    *Query Params - Filtros e Buscas => http://localhost:3333/settings/?search=facebook&
    *Body Params - corpo da req => {message: "Parametros no corpo da req em forma de JSON"}
*/ 
const settingsController = new SettingsController()
const UsersController = new UserController();
const messagesController = new MessagesController();


routes.post('/settings', settingsController.create)
routes.post('/users', UsersController.create)
routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)

export {routes}