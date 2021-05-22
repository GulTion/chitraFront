import openSocket from "socket.io-client";
import Rx from 'rxjs/Rx';


const URL = "https://chitraBackend.gultion.repl.co/"
const {log} = console;
const socket = openSocket(URL);

const subscribeForDrawings = (cb) => {

    socket.on('drawing', drawing => cb(drawing));
    socket.emit('subscribeForDrawings');
}

const subscribeForDrawingsList = (cb) =>{
  socket.on('drawingList', drawing => cb(drawing));
  socket.emit("subscribeForDrawingList")
}

const createDrawing = ({name,key}) => {
    socket.emit('createDrawing', {name,key})
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
  // socket.on(`drawing:${drawingId}`, (list)=>cb({lines:[list]}))
  
  socket.emit('subscribeForPublishLine', drawingId);
}

const subscribeForAllPublishLine = (drawingId, cb)=>{
  const lineStream = Rx.Observable.fromEventPattern(
    h=>socket.on(`drawingAll:${drawingId}`, h),
    h=>socket.off(`drawingAll:${drawingId}`, h)
  );

  const bufferedTimeStream = lineStream.bufferTime(100).map(lines=>({lines}))
  bufferedTimeStream.subscribe(lineEvt => cb(lineEvt))
  // socket.on(`drawing:${drawingId}`, (list)=>cb({lines:[list]}))
  
  socket.emit('subscribeForAllPublishLine', drawingId);
}

const getDrawingById = (id,cb)=>{
  socket.on('takeDrawing', info => cb(info))
  socket.emit('getDrawingById',id);
}


export {
  subscribeForDrawings,     createDrawing,  publishLine,
  subscribeForPublishLine,  getDrawingById, subscribeForDrawingsList,
  subscribeForAllPublishLine
}
