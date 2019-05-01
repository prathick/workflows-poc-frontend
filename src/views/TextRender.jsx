import React, { Component } from 'react';

class TextRender extends Component {
  render () {
    return (
     <div>
       <p className={this.props.content.class}>{this.props.content.value}</p>
       {this.props.children.map(element => {
         let Children = element.component
       return  <Children />
       })}
     </div>
    )
  }
}
export default TextRender;
