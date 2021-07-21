import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducer"


export default function Store() {
 return createStore(
   reducer,
   applyMiddleware(thunk)
 );
}