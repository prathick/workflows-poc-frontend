import React, { Component } from 'react'

class GCInput extends Component {
  render () {
    return (
    <input type={this.props.content.type} name={this.props.content.name ? this.props.content.name : ''} value={ this.props.content.value}/>
    )
  }
}
export default GCInput;
