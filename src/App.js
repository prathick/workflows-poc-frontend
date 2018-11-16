import React, { Component } from 'react'
import Main from 'views/main/main.jsx'
import 'App.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
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
