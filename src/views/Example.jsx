import React, { Component } from 'react';
import axios from 'axios';
// import TextRender from 'views/TextRender';
// import InputRender from './InputRender';
// import FormRender from './formRender';
// import InputComp from './InputComp';
import MoodEnter from './MoodEnter';

const compo ={
    MoodEnter: MoodEnter
}
class Example extends Component {
  // state = {
  //   value: TextRender
  // }
  state = {}

 
  componentDidMount() {
    const AuthStr = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMWIwZGFhOTFmOWUwZDZlNjMxODE4NSIsImlhdCI6MTU0NTI3NzQzOH0._vVO8c-IRnUzHoXr1XNqceMpKrhl1egcgkdth8gqFtA"
    axios
      .get("http://localhost:8000/api/pa/m?flow=enterMood&", { headers: { Authorization: AuthStr } })
      .then(res => {
        console.log(res.data.resources);
        this.setState({ data: res.data.data });

      });
  }

  render() {

    if(!this.state || !this.state.data){
      return(<p>Hell</p>)
    }
else{
  return (
    this.state.data.states.map(i => {
      let MyItem = compo[i.Template.component]
     return <MyItem content={i.props} />
    })

  )

}
   
  }
}

export default Example;
