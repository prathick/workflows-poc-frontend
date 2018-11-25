import AppHelper from "helpers/AppHelper.js";
import client from 'index.js';

class API {

  // POST requests

  registerUser (data) {
    client.post("user/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
      password: data.password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  }

  // GET requests

}

const instance = new API();
export default instance;
