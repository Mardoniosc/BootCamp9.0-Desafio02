import { Router } from 'express';

import UserController from './app/controller/UserController';
import StudentController from './app/controller/StudentController';
import SessionController from './app/controller/SessionController';
import authMeddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMeddleware);

routes.put('/users', UserController.update);
routes.post('/students', StudentController.store);

export default routes;
