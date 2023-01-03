import React, { Component } from 'react'
import './Dashboard.css';
import TableRow from './TableRow';
import Navbar from './Navbar';
import Calander from './Calander';
import apis from '../utilities/api';
import {withRouter} from './Navigate';
import QRcode from 'qrcode';

class Dashboard extends Component {
  constructor(){
    super()
    this.state ={
      attendanceData :[],
      getQR:false,
      QRUrl:'',
    }
    this.updateAttendanceData = this.updateAttendanceData.bind(this);
    this.getQRCode = this.getQRCode.bind(this);
    this.getQRScanner = this.getQRScanner.bind(this);
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
  getQRCode(data){
    this.setState({getQR:!this.state.getQR});
    if(this.state.getQR){
      QRcode.toDataURL(data)
      .then(url => {
        this.setState({QRUrl:url});
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
  getQRScanner(){
    this.props.navigate('/QRScanner');
  }

  render() {
    if(this.state.getQR){
      return (
        <div className='dashboard-container'>
          <Navbar isHomePage = {1} getQRCode = {this.getQRCode} getQRScanner ={this.getQRScanner}/>
          <h1>Welcome to dashboard!</h1>
          <Calander getUserAttendance = {this.getUserAttendance} updateAttendanceData = {this.updateAttendanceData} />
          <img src={this.state.QRUrl}/>
          <TableRow isHeader = {1}/>
          {this.renderData()}
        </div>
      )
    }
    else {
      return (
        <div className='dashboard-container'>
          <Navbar isHomePage = {1} getQRCode = {this.getQRCode} getQRScanner ={this.getQRScanner}/>
          <h1>Welcome to dashboard!</h1>
          <Calander getUserAttendance = {this.getUserAttendance} updateAttendanceData = {this.updateAttendanceData} />
          <TableRow isHeader = {1}/>
          {this.renderData()}
        </div>
      )
    }
  }
}

export default withRouter(Dashboard);
