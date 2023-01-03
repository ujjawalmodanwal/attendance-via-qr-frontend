import React, { Component } from 'react';
import Button from './Button';
import './Navbar.css';
import {withRouter} from './Navigate';
import apis from '../utilities/api';

class Navbar extends Component {
	constructor(props){
		super(props)
		this.state = {
			QRString:''
		}
		this.getString = this.getString.bind(this);
		this.getNewQRString = this.getNewQRString.bind(this);
	}
    openProfile(){
        this.props.navigate('/Profile');
    }
	openHome(){
		this.props.navigate('/Dashboard');
	}
	handleLogout(){
		localStorage.clear();
		window.location.replace('/')
	}
	getHomeButton(){
		if(this.props.isHomePage===1){
			return <div className='navbar-logout' onClick={()=>this.openProfile()}><Button action_name = "Profile"/></div>
		}
		else{
			return <div className='navbar-logout' onClick={()=>this.openHome()}><Button action_name = "Home"/></div>
		}
	}
	getString(data){
		this.setState({QRString:data});
	}
	componentDidMount(){
		apis.getQRString(false, this.getString);
	}
	getNewQRString(){
		apis.getQRString(true, this.getString);
		this.props.getQRCode(this.state.QRString);
	}

	render() {
		return (
			<div className='navbar-container'>
				{this.getHomeButton()}
				<div className='navbar-logout' onClick={()=>{this.props.getQRCode(this.state.QRString);}}><Button action_name = "QR Code"/></div>
				<div className='navbar-logout' onClick={()=>this.getNewQRString()}><Button action_name = "New QR"/></div>
				<div className='navbar-logout' onClick={()=>this.props.getQRScanner()}><Button action_name = "Scan QR"/></div>
				<div className='navbar-logout' onClick={()=>this.handleLogout()}><Button action_name = "Logout"/></div>
			</div>
		)
	}
}

export default withRouter(Navbar);
