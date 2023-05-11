import { Response, Router } from 'express';
import { UserController } from './controllers/user_controller';
import { StockController } from './controllers/stock_controller';
import { connectionController } from './controllers/connection_controller';

var routes = Router();

// *** User routes *** //

routes.post('/user/create', new UserController().create)

routes.get('/user/auth', new UserController().auth)

// *** Stock routes *** //

routes.post('/stock/create', new StockController().create)

routes.get('/stock/read/all', new StockController().findAllStocks)

routes.get('/server', new connectionController().serverIsOn)
export default routes;