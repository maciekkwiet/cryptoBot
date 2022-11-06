import * as socketio from 'socket.io';

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => () => {
  try {
    // TODO
  } catch (ex) {
    console.error(ex);
  }
};

export { onUserJoin };
