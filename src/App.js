import React from 'react';
import './App.css';

import {subscribeToTimer} from "./api"

class App extends React.Component{
  constructor(props){
    super(props);
    subscribeToTimer(1000,(timestamp)=>{
      this.setState({timestamp})
    })
  }

  state = {
    timestamp:"No interval have yet"
  }
  render(){

    return <div className="App">
    {this.state.timestamp}
    </div>
  }
}

export default App;
