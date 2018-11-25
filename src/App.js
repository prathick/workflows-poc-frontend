import React, { Component } from 'react'
import Main from 'views/main/main.jsx'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'
import Header from 'components/header.jsx'
import AppHelper from "helpers/AppHelper.js";
import Footer from 'components/footer.jsx';
import LoadingComponent from 'components/loading/loading.jsx';
import { connect } from 'react-redux';
import { requestAccessTokenLogin } from 'actions';
import Login from 'views/login/login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'DLP React Boilerplate',
    };
  }

  // Used to handle state from children
  stateHandler = (state) => {
    this.setState(
      state
    )
  }

  componentDidMount() {
    let token = ''
    if ((token = AppHelper.isUserLocalStorageLoggedIn())) {
      this.props.dispatchAccessTokenLogin(token)
      .then((response) => {
        console.log(response);
      })
      .catch ((error) => console.log(error));
    }
  }

  render() {
    if (this.props.loading) return (<LoadingComponent/>);
    else return (
      <div className="App">
        {this.props.loggedIn ? <Header title={this.state.title} logout={this.stateHandler}/> : ''}
        {this.props.loggedIn ? <Main parentState={this.state} parentStateHandler={this.stateHandler}/> : <Login parentState={this.state} parentProps={this.props}/>}
        {this.props.loggedIn ? <Footer/> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      loggedIn : state.loginStatus.loggedIn,
      loading : state.loginStatus.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAccessTokenLogin : (token) => dispatch(requestAccessTokenLogin(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
