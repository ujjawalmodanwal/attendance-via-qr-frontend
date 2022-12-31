import React, { Component } from 'react'
import Button from './Button';
import './Dashboard.css';

export default class Dashboard extends Component {
  handleLogout(){
    localStorage.clear();
    window.location.replace('/')
  }
  render() {
    return (
      <div className='dashboard-container'>
        <h1>Welcome to dashboard!</h1>
        <div className='dashbaord-logout' onClick={()=>this.handleLogout()}><Button action_name = "Logout"/></div>
      </div>
    )
  }
}
