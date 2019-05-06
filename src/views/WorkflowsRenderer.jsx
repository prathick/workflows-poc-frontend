import React, { Component } from 'react'
import axios from 'axios'
// import TextRender from 'views/TextRender'
// import InputRender from './InputRender'
// import FormRender from './formRender'
// import InputComp from './InputComp'
import { getDC, getDV } from 'helpers/dr'

class WorkflowsRenderer extends Component {
  state = {
    data: {}
  }


  componentDidMount() {
    if (!this.props || !this.props.location || !this.props.location.state || !this.props.location.state.flow) return

    const AuthStr = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMWIwZGFhOTFmOWUwZDZlNjMxODE4NSIsImlhdCI6MTU0NTI3NzQzOH0._vVO8c-IRnUzHoXr1XNqceMpKrhl1egcgkdth8gqFtA"
    axios
      .get(`http://localhost:8000/api/pa/wf?flow=${this.props.location.state.flow}`, { headers: { Authorization: AuthStr } })
      .then(res => {
        if (!res || !res.data || !res.data.data) return

        console.log(res)
        this.setState({ data: res.data.data })
      });
  }

  //wf-track_mood

  switchTemplate() {
    console.log('wf.switchTemplate')
    if ( !this.state.data || !this.state.data.template || !(!this.state.data.template.view || !this.state.data.template.component) ) return
    console.log('wf.switchTemplate2222')

    if (this.state.data.template.view) {
      return getDV(this.state.data.template.view, this.state.data.template.data)
    }
    return getDC(this.state.data.template.component, this.state.data.template.data)
  }

  render() {
    console.log('wf.render')
    // if (!this.state || !this.state.data || !this.state.data.states) return (<p>Work flow renderer</p>)


    // return getDC('SVMoodForm', {})
    return (
      <div>
        <h5>Workflows</h5>
        { this.switchTemplate() }
      </div>
    )

    // return (
    //   this.state.data.states.map(i => {
    //     let MyItem = components[i.template.component]
    //     return <MyItem content={i.props} />
    //   })
    // )

  }
}

export default WorkflowsRenderer;
