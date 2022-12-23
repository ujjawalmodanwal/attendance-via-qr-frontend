import './Button.css'

import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props)
        this.state = {
            action_name : props.action_name,   
        }
    }
  render() {
    return (
      <div className='Button-wrapper'>{this.state.action_name}</div>
    )
  }
}
