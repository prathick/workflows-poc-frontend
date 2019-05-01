import React, { Component } from 'react';
import axios from 'axios';
import TextRender from 'views/TextRender';
import InputRender from './InputRender';
import FormRender from './formRender';
import InputComp from './InputComp';


class Example extends Component {
  // state = {
  //   value: TextRender
  // }
  state =
    {
      data: [
        {
          "component": TextRender,
          "props": {
            "value": "Enter your name:",
            "class": "class1"
          },
          "children": [
            {
              "component": InputRender,
              "props": {
                "type": "text",
                "name": "fname"
              }
            },
            {
              "component": InputRender,
              "props": {
                "type": "submit",
                "value": "Submit"
              }
            }
          ]
        },
        {
          "component": FormRender,
          "props": {
            "value": "Enter your name:",
            "class": "class1"
          },
          "children": [
            {
              "component": InputComp,
              "props": {
                "type": "text",
                "name": "fname"
              }
            },
            {
              "component": InputComp,
              "props": {
                "type": "submit",
                "value": "Submit"
              }
            }
          ]
        },
      ]
    }

  render() {
  
    return (
      this.state.data.map(i => {
        let MyItem = i.component
        return <MyItem  content={i.props} children={i.children}/>
      }))
  }
}

export default Example;
