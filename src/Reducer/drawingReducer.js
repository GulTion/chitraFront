import {subscribeForDrawingsList} from "../api"

const {log} = console

const initState = {
    list:[]

}

const drawingReducer = (state=initState, action)=>{

    switch(action.type){
        case 'GET_DRAWING_LIST':
            return new Promise((res, rej)=>{
                subscribeForDrawingsList((drawing) => {
                    log('GET_DRAWING_LIST '+drawing.length);
                    log(state.list)
                   res( {...state, list:drawing})
                    
                })
            })


        default:
            return state
    }
}

export default drawingReducer