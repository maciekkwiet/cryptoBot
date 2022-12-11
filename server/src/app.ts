import * as http from 'http';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
import * as socketio from 'socket.io';

import { socketController } from './routes/socket';
import { router } from 'routes';

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = socketio(server);
(global as any).io = io
socketController(io);

const dbKey = process.env.DB_KEY;

if (dbKey) {
  mongoose
    .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected with DB'))
    .catch(() => console.error('Error with DB'));
} else {
  console.log(`Enviroment variable 'DB_KEY' not set. Cannot connect to DataBase`);
}

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Server listening on port ${port}`));

app.set('io', io);
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(router);
