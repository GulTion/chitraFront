import openSocket from "socket.io-client";
const URL = "https://localhost:8000/"
const {log} = console;
const socket = openSocket(URL);

const subscribeToTimer = (interval ,cb) =>{
  log(interval)
  socket.on('timer', timestamp=> cb(timestamp));
  socket.emit('subscribeToTimer', interval);
}
export {
  subscribeToTimer,
}
