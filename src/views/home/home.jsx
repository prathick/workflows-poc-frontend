import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  onClick = () => {

  }
  render() {
    return (
      <div className="Home">
        <Link to={{pathname: "/wf", state: {flow: 'wf-track_mood'}}}>Track your mood</Link>
      </div>
    );
  }
}

export default Home;
