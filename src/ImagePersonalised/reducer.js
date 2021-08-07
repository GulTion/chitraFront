import React from "react";
import ArtBoardSettings from "./Components/ArtBoardSettings";
import I from "./Components/Icons/";
import uuid from "uuid-random";
import arrayMove from "array-move";

const istate = {
  canvas: {
    background: {
      type: "color",
      index: 0,
      value: "#ffffff",
      name: "#ffffff",
    },
  },
  isChooseImageActive: false,
  undoRedo: {
    arr: [],
    pointer: -1,
  },

  objectList: [
    {
      element: <ArtBoardSettings />,
      icon: I.artboard,
      isOpen: true,
      id: uuid(),
      title: "Artboad Settings",
      unique: true,
      visible: true,
    },
  ],

  textSettings: {},
};
const { log } = console;

export default (state = istate, action) => {
  const { data, type } = action;
  switch (action.type) {
    case "COLOR_CHOOSE_CANVAS":
      // log(action);
      return {
        ...state,
        canvas: {
          ...state.canvas,
          background: action.data,
        },
      };
    case "ADD_OBJECT":
      let sorted1 = [data, ...state.objectList];
      // let n = sorted1.length-1;
      // sorted1.forEach((e,i)=>{
      //   if(i!==sorted1.length-1){

      //     log(e.object?.id,document._.canvas.getObjects().indexOf(e.object))
      //     document._.canvas.moveTo(e.object, n--);
      //     log(e.object.id,document._.canvas.getObjects().indexOf(e.object))

      //   }

      // })
      // document._.canvas.renderAll();
      // // log(data);

      return {
        ...state,
        objectList: sorted1,
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
    case "OBJECT_DELETE":
      // log(data)

      // document._['tabOperation'] = 'delete'
      return {
        ...state,
        objectList: state.objectList.map((e) => {
          if (e.id === data.id) {
            return { ...e, visible: false };
          } else {
            return { ...e, visible: true };
          }
        }),
      };
    case "OBJECT_RENAME":
      return {
        ...state,
        objectList: state.objectList.map((e) => {
          if (e.id === data.id) {
            return {
              ...e,
              title: data.value,
            };
          }
          return e;
        }),
      };
    case "CHOOSE_IMAGE_ACTIVATE":
      return {
        ...state,
        isChooseImageActive: data,
      };

    case "SORT_LIST":
      // log(data)
      // document._.canvas.moveTo(state.objectList[data.oldIndex].object, state.objectList.length-data.newIndex-1);
      let sorted = arrayMove(state.objectList, data.oldIndex, data.newIndex);
      sorted.forEach((e, i) => {
        if (i == sorted.length - 1) {
          return;
        }
        document._.canvas.moveTo(e.object, sorted.length - i);
      });
      document._.canvas.renderAll();
      return {
        ...state,
        objectList: sorted,
      };

    case "ADD_UNDO":
      const { arr, pointer } = state.undoRedo;
      if (arr.length == pointer + 1) {
        let newArr = [...arr, data];
        let newPointer = pointer + 1;
        return {
          ...state,
          undoRedo: {
            arr: newArr,
            pointer: newPointer,
          },
        };
      } else {
        let newArr = arr.splice(0, pointer);
        newArr.push(data);
        let newPointer = pointer + 1;
        return {
          ...state,
          undoRedo: {
            arr: newArr,
            pointer: newPointer,
          },
        };
      }

    case "DO_UNDO":
      return {
        ...state,
        undoRedo: {
          ...state.undoRedo,
          pointer: data,
        },
      };

    case "MAKE_STATE":
      return {
        ...state,
        ...data,
        objectList: [
          ...data.objectList,
          {
            element: <ArtBoardSettings />,
            icon: I.artboard,
            isOpen: true,
            id: uuid(),
            title: "Artboad Settings",
            unique: true,
            visible: true,
          },
        ],
      };
    default:
      return state;
  }
};
