import openSocket from "socket.io-client";
import Rx from 'rxjs/Rx';


const URL = "127.0.0.1:8000/"
const {log} = console;
const socket = openSocket(URL);

const subscribeForDrawings = (cb) => {

    socket.on('drawing', drawing => cb(drawing));
    socket.emit('subscribeForDrawings');
}

const createDrawing = (name) => {
    socket.emit('createDrawing', name)
}

const publishLine=(line)=>{
  socket.emit('publishLine', line)
}

const subscribeForPublishLine = (drawingId, cb)=>{
  const lineStream = Rx.Observable.fromEventPattern(
    h=>socket.on(`drawing:${drawingId}`, h),
    h=>socket.off(`drawing:${drawingId}`, h)
  );

  const bufferedTimeStream = lineStream.bufferTime(100).map(lines=>({lines}))
  bufferedTimeStream.subscribe(lineEvt => cb(lineEvt))
  
  socket.emit('subscribeForPublishLine', drawingId);
}


export {subscribeForDrawings, createDrawing,publishLine,subscribeForPublishLine}
