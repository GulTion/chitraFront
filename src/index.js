import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Store from "./ImagePersonalised/store";
import { Provider } from "react-redux";
export const store = Store()
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
export default {}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

