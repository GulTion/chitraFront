import openSocket from "socket.io-client";
import Rx from "rxjs/Rx";
import URL from "./URL";
import axios from "axios";

const _key = atob(localStorage.getItem("id"));
const token =()=>atob(localStorage.getItem("id"));
const socket = openSocket(URL);
let firstTime = true;
// const subscribeForDrawings = (cb) => {

//     socket.on(`drawing:${_key}`, drawing => cb(drawing));
//     socket.emit('subscribeForDrawings',{key:_key});
// }

const subscribeForDrawingsList = (cb) => {
  socket.on("drawingList", (drawing) => cb(drawing));
  socket.emit("subscribeForDrawingList", { key: _key });
};





const createDrawing = async ({ name, key }) => {
  await socket.emit("createDrawing", { name, key: key, user: _key });
};

const publishLine = (line) => {
  socket.emit("publishLine", line);
};

const subscribeForPublishLine = (drawingId, cb) => {
  const lineStream = Rx.Observable.fromEventPattern(
    (h) => socket.on(`drawing:${drawingId}`, h),
    (h) => socket.off(`drawing:${drawingId}`, h)
  );

  const bufferedTimeStream = lineStream
    .bufferTime(100)
    .map((lines) => ({ lines }));
  bufferedTimeStream.subscribe((lineEvt) => cb(lineEvt));
  // socket.on(`drawing:${drawingId}`, (list)=>cb({lines:[list]}))

  socket.emit("subscribeForPublishLine", drawingId);
};

const subscribeForAllPublishLine = (drawingId, cb) => {
  const lineStream = Rx.Observable.fromEventPattern(
    (h) => socket.on(`drawingAll:${drawingId}`, h),
    (h) => socket.off(`drawingAll:${drawingId}`, h)
  );

  const bufferedTimeStream = lineStream
    .bufferTime(100)
    .map((lines) => ({ lines }));
  bufferedTimeStream.subscribe((lineEvt) => cb(lineEvt));
  // socket.on(`drawing:${drawingId}`, (list)=>cb({lines:[list]}))

  socket.emit("subscribeForAllPublishLine", drawingId);
};

const getDrawingById = (id, cb) => {
  socket.on("takeDrawing", (info) => cb(info));
  socket.emit("getDrawingById", id);
};

const deleteDrawing = (id, cb) => {
  axios.post(URL + "/drawing/delete", { id, key: _key }).then((e) => {
    // log(e);
    cb(e);
  });
};




const pullChange = (drawingId,cb) => {
  socket.on(`pullChange:${drawingId}`, data=>{
    cb(data)
  })
};


const pushChange = (drawingId, data)=>{
  socket.emit(`pushChange`, {drawingId, data})
}
const subscribeForFabric = (drawingId, cb)=>{

 
  socket.on(`giveMeCanvas:${drawingId}`, (id)=>{
    console.log("data")
      socket.emit(`takeMyCanvas`, {id:id,canvas:document.canvas.toJSON(['id'])})
  })
  socket.on(`hereMyCanvas:${drawingId}`, (data)=>{
    if(firstTime){
      if(data.from=="server"){
        document.canvas.loadFromJSON(data.json)
      }
      else if(data.from=="socket"){
        document.canvas.loadFromJSON(data.json)
        firstTime=false
      }
    }
  })
  socket.emit(`subscribeForFabric`, {drawingId})
}

const saveChitr = ({drawingId, json})=>{
  socket.emit("saveChitr", {drawingId,json, key:token()})
}


export {
  // subscribeForDrawings,
  createDrawing,
  publishLine,
  subscribeForPublishLine,
  getDrawingById,
  subscribeForDrawingsList,
  subscribeForAllPublishLine,
  deleteDrawing,
  pullChange,
  pushChange,
  subscribeForFabric,
  saveChitr
};
