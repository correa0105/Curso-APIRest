import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import studentRoutes from './src/routes/studentRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import photoRoutes from './src/routes/photoRoutes';

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
    this.app.use('/', homeRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
