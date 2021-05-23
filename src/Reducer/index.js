import {combineReducers} from "redux"
import auth from "./authReducer"
import drawing from "./drawingReducer"

export default combineReducers({auth,drawing})