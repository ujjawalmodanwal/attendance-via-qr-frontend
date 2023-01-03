import React, { Component } from 'react';
import Button from './Button';
import './Welcome.css';
import apis from '../utilities/api'; 
import {withRouter} from './Navigate';


class Welcome extends Component {
	constructor(props){
		super(props);
		this.state ={
			Name: '',
			user_ID: '',
			Department:'',
			Class:'',
			Year:'',
			Email:'',
			Password:'',
			Contact:'',
			isLoginRequest:false,
			isRegisterRequest:false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
		this.navigateToDashboard = this.navigateToDashboard.bind(this);
	}

	navigateToDashboard(){
		this.props.navigate('/Dashboard')
	}
	handleSubmit(action, navigateToDashboard){
		if(action===2){
			//check if all the fields are filled correctly
			if(this.state.Name!=='' && 
			   	this.state.user_ID!=='' &&
			   	this.state.Department!==''&&
			  	this.state.Class!==''&&
			   	this.state.Year!==''&&
			   	this.state.Email!==''&&
			   	this.state.Password!==''&&
			   	this.state.Contact!=='')
				{	

				const userData = {
					Name:this.state.Name, 
					user_ID:this.state.user_ID, 
					Department:this.state.Department, 
					Class:this.state.Class, 
					Year:this.state.Year, 
					Email:this.state.Email, 
					Password:this.state.Password, 
					Contact:this.state.Contact
				}
				apis.registerUser(userData, this.props.checkLocalStoreage,navigateToDashboard);
			}
			else{
				window.alert('Kindly provide all the required information!')
			}
		}
		if(action===1){
			if(this.state.Email!=='' && this.state.Password!==''){
				const userCredentials = {Email:this.state.Email, Password: this.state.Password};
				apis.loginUser(userCredentials, this.props.checkLocalStoreage, navigateToDashboard);
			}
			else{
				window.alert('Kindly provide all the required information!')
			}
		}
	}



	handleLogin(navigateToDashboard){
		var textBoxStyle = {height:'2vw', margin: '0.8vw', width:'20vw', border:'1px solid grey' ,borderRadius:'5px' }
		if(window.innerWidth < 880){
			textBoxStyle.width='70vw';
			textBoxStyle.height='10vw';
			textBoxStyle.margin='2vw';
		}
		return(
			<div className='welcome-container'>
				<div className='welcome-heading'>	
					<h1>Welcome to the Library!</h1>
				</div>
				<div className='welcome-login-box'>
					<form className='welcome-form'>
						<h3>Login </h3>
						<input style={textBoxStyle} name = 'Email' type="email" value={this.state.Email} placeholder='Email' onChange={(e)=>this.setState({Email:e.target.value})}/>
						<input style={textBoxStyle} name = 'Password' type="password" value={this.state.Password} placeholder='Password' onChange={(e)=>this.setState({Password:e.target.value})}/>
						<div onClick={()=>this.handleSubmit(1, {navigateToDashboard})} style={{marginBottom:'1vw'}}><Button action_name = 'Login'/></div>
						New User?
						<div onClick={()=>this.setState({isRegisterRequest:true, isLoginRequest:false})}><Button action_name = 'Register'/></div>
					</form>
				</div>
			</div>
		)
	}



	handleRegister(navigateToDashboard){
		var textBoxStyle = {height:'2vw', margin: '0.8vw', width:'20vw', border:'1px solid grey' ,borderRadius:'5px' }
		if(window.innerWidth < 880){
			textBoxStyle.width='70vw';
			textBoxStyle.height='10vw';
			textBoxStyle.margin='2vw';
		}
		return (
			<div className='welcome-container'>
				<div className='welcome-heading'>	
					<h1>Welcome to the Library!</h1>
				</div>
				<div className='welcome-login-box'>
					<form className='welcome-form'>
						<h3>Create Account</h3>
						<input style={textBoxStyle} name = 'Name' type="text" value={this.state.Name} placeholder='Name' onChange={(e)=>this.setState({Name:e.target.value})}/>
						<input style={textBoxStyle} name = 'user_ID' type="text" value={this.state.user_ID} placeholder='user ID' onChange={(e)=>this.setState({user_ID:e.target.value})}/>
						<input style={textBoxStyle} list="Departments" name="Department" value={this.state.Department} placeholder='Department' onChange={(e)=>this.setState({Department:e.target.value})}/>
							<datalist id="Departments">
								<option value="CSE"/>
								<option value="MNC"/>
								<option value="EEE"/>
								<option value="ECE"/>
								<option value="CIV"/>
								<option value="MEC"/>
							</datalist>
						<input style={textBoxStyle} list="Class" name="Class" value={this.state.Class} placeholder='Class' onChange={(e)=>this.setState({Class:e.target.value})}/>
							<datalist id="Class">
								<option value="BTECH"/>
								<option value="MTECH"/>
								<option value="IDD"/>
								<option value="PHD"/>
								<option value="MSC"/>
								<option value="MPharma"/>
							</datalist>
						<input style={textBoxStyle} list="Year" name = 'Year' value={this.state.Year} placeholder='Year' onChange={(e)=>this.setState({Year:e.target.value})}/>
							<datalist id="Year">
								<option value="I"/>
								<option value="II"/>
								<option value="III"/>
								<option value="IV"/>
								<option value="V"/>
							</datalist>
						<input style={textBoxStyle} name = 'Email' type="email" value={this.state.Email} placeholder='Email' onChange={(e)=>this.setState({Email:e.target.value})}/>
						<input style={textBoxStyle} name = 'Password' type="password" value={this.state.Password} placeholder='Password' onChange={(e)=>this.setState({Password:e.target.value})}/>
						<input style={textBoxStyle} name = 'Contact' type="contact" value={this.state.Contact} placeholder='Contact' onChange={(e)=>this.setState({Contact:e.target.value})}/>
						<div style={{marginBottom:'1vw'}} onClick={()=>this.handleSubmit(2, {navigateToDashboard})}><Button action_name='Register'/></div>
						Already Have an account?
						<div onClick={()=>this.setState({isRegisterRequest:false, isLoginRequest:true})} ><Button action_name = 'Login'/></div>
					</form>
				</div>
			</div>
    	)

	}



  	render() {
		if(this.state.isRegisterRequest){
			return this.handleRegister(this.navigateToDashboard);
		}
		else if(this.state.isLoginRequest){
			return this.handleLogin(this.navigateToDashboard);
		}
		else{
			return(
				<div className='welcome-container'>
					<div className='welcome-heading'>	
						<h1>Welcome to the Library!</h1>
					</div>
					<div className='welcome-login-box'>
						<div onClick={()=>this.setState({isRegisterRequest:true, isLoginRequest:false})}><Button action_name = 'Register'/></div>
						<div onClick={()=>this.setState({isRegisterRequest:false, isLoginRequest:true})}><Button action_name = 'Login'/></div>
					</div>
				</div>
			)
		}
  	}
}

export default withRouter(Welcome);
