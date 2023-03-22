import express from 'express';
import fs from 'fs';
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
    
    const sslConfig = config.server.ssl;

    if(sslConfig.useSsl) {
        const sslOptions = {
            key: fs.readFileSync(sslConfig.keyPath),
            cert: fs.readFileSync(sslConfig.certPath),
            ca: fs.readFileSync(sslConfig.caPath),
            // requestCert: true,
            // rejectUnauthorized: true
        };

        const server = https.createServer(sslOptions, app);
        server.listen(config.server.port, onListen);
    } else {
        app.listen(config.server.port, onListen);
    }
}
bootstrap();