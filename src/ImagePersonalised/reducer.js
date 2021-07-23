import React from "react";
import ArtBoardSettings from "./Components/ArtBoardSettings";
import I from "./Components/Icons/";
import uuid from "uuid-random";

const istate = {
  canvas: {
    background: {
      type: "color",
      index: 0,
      value: "#ffffff",
      name: "#ffffff",
    },
  },
  objectList: [
{
      element: <ArtBoardSettings />,
      icon: I.artboard,
      isOpen: true,
      id: uuid(),
      title: "Artboad Settings",
      unique: true,
    }
  ],


  textSettings: {},
};
const { log } = console;

export default (state = istate, action) => {
  const { data, type } = action;
  switch (action.type) {
    case "COLOR_CHOOSE_CANVAS":
      log(action);
      return {
        ...state,
        canvas: {
          ...state.canvas,
          background: action.data,
        },
      };
    case "ADD_OBJECT":
      log(data);
    
      return {
        ...state,
        objectList: [data, ...state.objectList],
      };
    case "OBJECT_LIST_CLOSE":

      return {
        ...state,
        objectList: state.objectList.map((_) => {
          if (_.id == action.data.id) {
            //   log(_)
            return { ..._, ...action.data };
          }
          return { ..._, isOpen: false };
        }),
      };
    case 'OBJECT_DELETE':
        log(data)
        
        // document._['tabOperation'] = 'delete'
        return {
            ...state,
            objectList:state.objectList.filter(e=>e.id!=data.id)
        }
    case 'OBJECT_RENAME':
        return{
            ...state,
            objectList:state.objectList.map(e=>{
                if(e.id===data.id){
                    return {
                        ...e,
                        title:data.value
                    }
                }
                return e
            })
        }

    default:
      return state;
  }
};
