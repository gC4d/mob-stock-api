import { Router } from 'express';
import { UserController } from './controllers/user_controller';

var routes = Router();


// ***User methods*** //

routes.post('/user/create', new UserController().create)


export default routes;