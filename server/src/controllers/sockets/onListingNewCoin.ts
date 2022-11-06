import * as socketio from 'socket.io';

const onListingNewCoin = (io: socketio.Server, socket: socketio.Socket) => () => {
  try {
    // TODO
  } catch (ex) {
    console.error(ex);
  }
};

export { onListingNewCoin };
