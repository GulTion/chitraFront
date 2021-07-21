const istate = {
    canvas:{
        background:{
            type:"color",
            index:0,
            value:"#ffffff",
            name:"#ffffff"
        }
    }
}
const {log} = console

export default (state =istate, action) => {
    switch (action.type) {
     case 'COLOR_CHOOSE_CANVAS':
         log(action)
      return {
       ...state, 
       canvas:{
           ...state.canvas,
           background:action.data
       }
      }
     default:
      return state
    }
   }