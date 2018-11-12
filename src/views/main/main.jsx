import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Home from 'views/home/home.jsx'
import Team from 'views/team/team.jsx'
import Login from 'views/login/login.jsx'
import { Switch, Route } from 'react-router-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter';


class Main extends Component {
  render() {
    return (
      <div className="Main">
      <BrowserRouter>
      <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/team' component={Team}/>
            <Route exact path='/home' component={Home}/>
        </Switch>
      </BrowserRouter>
       
      </div>
    );
  }
}

export default Main;
