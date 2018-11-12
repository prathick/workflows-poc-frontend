import React, { Component } from 'react'
import logo from './images/deakin-logo.svg'
import simpleHelper from './helpers/simpleHelper'
import Main from './views/main/main.jsx'
import './App.css'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'

let randomN=new simpleHelper()
console.log(randomN.generateRandomNumber())
console.log(randomN.generateRandomInt(10,1000))
/*fetch('/api/hello').then((response)=>response.json()).then((responseJson)=>{
  console.log('done')
})*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:false ,
    };
  }
  render() {    
    return (
      <div className="App">
       
        <Main />
      </div>
    );
  }
}

export default App;
