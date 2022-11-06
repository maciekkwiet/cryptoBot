import * as socketio from 'socket.io';
import * as http from 'http';
import { onUserJoin } from '@controllers/sockets/onUserJoin';
import { onListingNewCoin } from '@controllers/sockets/onListingNewCoin';

const socketController = (server: http.Server): void => {
  const io = socketio(server);

  io.on('connect', (socket: socketio.Socket): void => {
    socket.on('USER_JOINED', onUserJoin(io, socket));
    socket.on('NEW_COIN_LISTED', onListingNewCoin(io, socket));
  });
};

export { socketController };
