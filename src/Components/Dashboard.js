import React, { Component } from 'react'
import './Dashboard.css';
import TableRow from './TableRow';
import Navbar from './Navbar';
import Calander from './Calander';
import apis from '../utilities/api';

export default class Dashboard extends Component {
  constructor(){
    super()
    this.state ={
      attendanceData :[],
    }
    this.updateAttendanceData = this.updateAttendanceData.bind(this);
  }
  
  getUserAttendance(date, updateAttendanceData){
    apis.getUserAttendance(date, updateAttendanceData);
  }

  updateAttendanceData(dataReceived){
    this.setState({attendanceData:dataReceived});
  }
  renderData(){
    if(this.state.attendanceData.length!==0){
      return (
        this.state.attendanceData.map(data => {
          return (<TableRow isHeader={0} rowData ={data}/>)
        })
      )
    }
    else{
      return (<div className='dashboard-information'>No Data for selected date!</div>);
    }
  }

  render() {
    return (
      <div className='dashboard-container'>
        <Navbar isHomePage = {1}/>
        <h1>Welcome to dashboard!</h1>
        <Calander getUserAttendance = {this.getUserAttendance} updateAttendanceData = {this.updateAttendanceData} />
        <TableRow isHeader = {1}/>
        {this.renderData()}
      </div>
    )
  }
}
