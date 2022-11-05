import * as socketio from 'socket.io';

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => () => {
  try {
    // const user = new User(name, socket.id, isAdmin);
    // const room = rooms.getRoom(roomId);
    // const message = `${name} has joined the room: ${roomId}`;
    // room.addUser(user);

    // socket.join(roomId.toString());

    // io.to(roomId).emit('USER_JOINED', room.getUsers());
    // io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onUserJoin };
