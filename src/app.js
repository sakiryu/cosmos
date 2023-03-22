import express from 'express';
import https from 'https';
import routes from './routes/routes.js';
import config from './config/config.js';

function onListen() {
    console.log(`Cosmos is ready to deliver updates on PORT ${config.server.port}`);
}

function bootstrap() {
    const app = express();
    
    app.use(express.json());
    app.use(routes);
    app.listen(config.server.port, onListen);
}
bootstrap();