import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';
import homeRoutes from './src/routes/homeRoutes';
import studentRoutes from './src/routes/studentRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import photoRoutes from './src/routes/photoRoutes';

console.log(resolve(__dirname, 'uploads', 'images'));

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
  'http://10.0.0.137:3002'];

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
    this.app.use(helmet({ crossOriginResourcePolicy: false }));
    this.app.use(delay(750));
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
