import React, { Component } from 'react';

class InputComp extends Component {

  render () {
    return (
    <input type={this.props.content.type} name={this.props.content.name ? this.props.content.name : ''} value={ this.props.content.value}/>
    )
  }
}
export default InputComp;
