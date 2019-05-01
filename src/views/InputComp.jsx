import React, { Component } from 'react';

class InputComp extends Component {
  render () {
    return (
    <input type={this.props.content.type}/>
    )
  }
}
export default InputComp;
