import React, { Component } from 'react';
import Button from './Button';
import './Navbar.css';
import {withRouter} from './Navigate';

class Navbar extends Component {
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
	render() {
		return (
			<div className='navbar-container'>
				{this.getHomeButton()}
				<div className='navbar-logout' onClick={()=>this.handleLogout()}><Button action_name = "Logout"/></div>
			</div>
		)
	}
}

export default withRouter(Navbar);
