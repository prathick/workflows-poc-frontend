import React, { Component } from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = (state) => {
  return {
      loggedIn : state.loginStatus.loggedIn,
      loading : state.loginStatus.loading,
      userRole : state.loginStatus.userRole
  }
}

export default connect(mapStateToProps)(Main);
