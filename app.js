import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import alunoRoute from './src/routes/alunoRoutes';
import userRoute from './src/routes/userRoutes';
import tokenRoute from './src/routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);
  }
}

export default new App().app;
