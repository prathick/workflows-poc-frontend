import { history } from 'helpers/router';

class AppHelper {
  developerModeLoginUser = (loggedIn) => {
    window.localStorage.setItem("loggedIn", loggedIn);
    history.push('/home') // Change this if you have to
  }

  loginUser = (loggedIn, accessToken) => {
    window.localStorage.setItem("loggedIn", loggedIn);
    window.localStorage.setItem("accessToken", accessToken);
    history.push('/home') // Change this if you have to
  }

  logoutUser = () => {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.removeItem("accessToken");
    history.push('/')
  }

  isUserLocalStorageLoggedIn = () => {
    let token = "";
    if (this.getUserLoggedIn() && ((token = this.getUserAccessToken()) !== ""))
      return token;
    else
      return false;
  }

  getUserLoggedIn = () => {
    let value = window.localStorage.getItem("loggedIn");
    return ( value !== 'false' && value !== 'null' );
  }

  getUserAccessToken = () => {
    let value = window.localStorage.getItem("accessToken");
    return ( value !== 'false' && value !== 'null' ) ? value : "" ;
  }

}

const instance = new AppHelper();
export default instance;
