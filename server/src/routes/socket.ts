import * as socketio from 'socket.io';
import * as http from 'http';
// import { onUserJoin } from '@controllers/sockets/onUserJoin';
// import { onListingNewCoin } from '@controllers/sockets/onListingNewCoin';
// import { onNewBigMove } from '@controllers/sockets/onNewBigMove';

const socketController = (io: socketio.Server): void => {
  io.on('connect', (socket: socketio.Socket): void => {
    // socket.on('USER_JOINED', onUserJoin(io, socket));
    // socket.on('NEW_COIN_LISTED', onListingNewCoin(io, socket));
    // socket.on('NEW_COIN_BIG_MOVE', onNewBigMove(io, socket));
  });
};

export { socketController };
