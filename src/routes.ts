import { Router } from 'express';
import { UserController } from './controllers/user_controller';

var routes = Router();


// ***User methods*** //

routes.post('/user/create', new UserController().create)

routes.get('/user/auth', new UserController().auth)


export default routes;