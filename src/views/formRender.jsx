import React, { Component } from 'react';
import InputComp from './InputComp';

class FormRender extends Component {
  render () {
    return (
      <form>
      {this.props.children.map(element =>{
        let InputVal = element.component
        return <InputVal content={element.props} />
      })}
      </form>
    )
  }
}
export default FormRender;
