import server from 'server';
import { Per, Users } from 'server.data';
import http from 'server.http';

const io = require('socket.io')(http);
const per = Per();
const users = Users();

io.on('connection', socket => {

  users.add(socket.id);

  const sync = setInterval(() => {
    socket.emit('sync_visitor', { visitor: users.get().length });
    socket.emit('sync_percent', { per: per.get() })
  }, 100);

  socket.on('disconnect', () => {
    users.remove(socket.id);
    clearInterval(sync);
  });

  //user generate power
  socket.on('incr_percent', data => per.add(3))
});

export default io;
