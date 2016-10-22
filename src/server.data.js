import _ from 'lodash';
import socket from 'server.socket';

function Per() {
  let per = 0;

  setInterval(() => {
    per = per - 1 < 0 ? 0 : per - 1;
  }, 100);

  return {
    get: () => per,
    add: amt => {
      if (per + amt > 100) {
        socket.emit('congraz')
      }
      per += amt;
    }
  }
}

function Users() {
  let users = [];

  return {
    get: () => users,
    add: id => {
      users.push(id);
    },
    remove: id => {
      users = _.pull(users, id);
    }
  }
}

export {
    Per,
    Users
};
