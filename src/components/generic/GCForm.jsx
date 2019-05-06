import React, { Component } from 'react'

// TODO: Render GCInput here

class GCForm extends Component {
  render () {
    if (!this.props || !this.props.children) return null
    return (
      <form>
      {this.props.children.map(element => {
        
      })}
      </form>
    )
  }
}
export default GCForm
