import React, { Component } from 'react';
import axios from 'axios';
import TextRender from 'views/TextRender';

class Example extends Component {
  state =
    {
      data: [
        {
          "component": "TextRender",
          "props": {
            "value": "Enter your name:",
            "class": "class1"
          }
        },
        // {
        //   "component": "FormRender",
        //   "props": {
        //     "method": "get",
        //     "action": "/getName"
        //   },
        //   "children": [
        //     {
        //       "component": "InputRender",
        //       "props": {
        //         "type": "text",
        //         "name": "fname"
        //       }
        //     },
        //     {
        //       "component": "InputRender",
        //       "props": {
        //         "type": "submit",
        //         "value": "Submit"
        //       }
        //     }
        //   ]
        // }
      ]
    }


  // componentDidMount() {
  //   axios.get("http://10.140.45.208:8000/m?flow=renderMood").then(res => {
  //     console.log(res.data)
  //   })
  // }
  render() {
    return this.state.data.map(i => {
      let MyItem = i.component
      return <MyItem data={i.props}/>
    })
  }
}

export default Example;
