import {subscribeForDrawings,subscribeForDrawingsList} from "../api"

const {log} = console

const initState = {
    list:[]

}

const drawingListGetter = (state, action)=>{
    
}

const drawingReducer = (state=initState, action)=>{
    const {data} = action;
    switch(action.type){
        case 'GET_DRAWING_LIST':
            return new Promise((res, rej)=>{
                subscribeForDrawingsList((drawing) => {
                    log('GET_DRAWING_LIST '+drawing.length);
                    log(state.list)
                   res( {...state, list:drawing})
                    
                })
            })
        break;

        default:
            return state
    }
}

export default drawingReducer