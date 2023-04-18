import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import homeRoutes from './routes/homeRoutes';
import studentRoutes from './routes/studentRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import photoRoutes from './routes/photoRoutes';

const whiteList = [
  'http://34.151.239.26',
  'http://34.151.239.26:80',
  'http://34.151.239.26:8080',
  'http://localhost',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://10.0.0.137',
  'http://10.0.0.137:3000',
  'http://10.0.0.137:3001',
  'http://10.0.0.137:3002',
  'http://www.infobibos.com.br'];

const corsOptions = {
  origin(origin, cb) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by Cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
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
