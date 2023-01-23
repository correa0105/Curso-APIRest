import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import alunoRoute from './src/routes/alunoRoute';
import userRoute from './src/routes/userRoute';

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
  }
}

export default new App().app;
