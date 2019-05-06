import React, { Component } from 'react'
import GCForm  from 'components/generic/GCForm'

class SVMoodForm extends Component {
  render () {
    if (!this.props.content) return null
    // TODO: get onsubmit thingy from parent
    const content = this.props.content
    console.log(content)
    return (
      <div>
      <h5>SVMoodForm</h5>
      <form action={"http://localhost:8000/api/pa/wf" }>
        <input type='hidden' name='flow' value={content.callbackFlow} />
        <div className='question'>
          How are you feeling today, my love?
        </div>
        <div className='options'>
          {content.values.map(value => {
            return <button name='value' value={value} key={value}>{value}</button>
          })}
        </div>
      </form>
      </div>
    )
  }
}
export default SVMoodForm
