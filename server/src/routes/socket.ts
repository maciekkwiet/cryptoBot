import * as socketio from 'socket.io';
import * as http from 'http';
import { onUserJoin } from '@controllers/onUserJoin';

const socketController = (server: http.Server): void => {
  const io = socketio(server);

  io.on('connect', (socket: socketio.Socket): void => {
    socket.on('USER_JOINED', onUserJoin(io, socket));
  });
};

export { socketController };
