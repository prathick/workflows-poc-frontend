import React, { Component } from 'react';
import axios from 'axios';
import TextRender from 'views/TextRender';
import InputRender from './InputRender';


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
      ]
    }


  // componentDidMount() {
  //   axios.get("http://10.140.45.208:8000/m?flow=renderMood").then(res => {
  //     console.log(res.data)
  //   })
  // }
  render() {
  
   
    return (
      this.state.data.map(i => {
        let MyItem = i.component
        return <MyItem  content={i.props} children={i.children}/>
      }))
  }
}

export default Example;
