import * as socketio from 'socket.io';

export const onNewBigMove = (tokenProp: any) => {
  try {
    const io = (global as any).io

    io.sockets.emit('NEW_BIG_MOVE', { tokenProp });
  } catch (ex) {
    console.error(ex);
  }
}
