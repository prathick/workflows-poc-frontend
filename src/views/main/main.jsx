import React, { Component } from 'react'
import Home from 'views/home/home.jsx'
import Team from 'views/team/team.jsx'
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="Main">
      <Switch>
        <Route exact path='/team' component={Team}/>
        <Route exact path='/home' component={Home}/>
      </Switch>
      </div>
    );
  }
}

export default Main;
