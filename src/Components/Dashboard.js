import React, { Component } from 'react'
import './Dashboard.css';
import TableRow from './TableRow';
import Navbar from './Navbar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard-container'>
        <Navbar isHomePage = {1}/>
        <h1>Welcome to dashboard!</h1>
        <TableRow/>
      </div>
    )
  }
}
