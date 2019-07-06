import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewarews();
    this.routes();
  }

  middlewarews() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;