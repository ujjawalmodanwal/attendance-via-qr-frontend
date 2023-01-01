import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			localStoragePresent:localStorage.getItem("jwtToken")
		}
		this.getRoutes = this.getRoutes.bind(this);
		this.checkLocalStoreage = this.checkLocalStoreage.bind(this);
	}


	checkLocalStoreage(){
		this.setState({localStoragePresent:localStorage.getItem("jwtToken")});
	}

	getRoutes(){
		if(this.state.localStoragePresent){
			return (
				<>
				<Route path="/Dashboard" element = {<Dashboard/>} />
				<Route path="/Profile" element = {<Profile/>} />
				</>
			)
		}
		else return(
			<Route path="/" element = {<Welcome checkLocalStoreage = {this.checkLocalStoreage}/>} />
		)
	}


	render(){
		return (
			<BrowserRouter>
				<Routes>
					{this.getRoutes()}
				</Routes>
			</BrowserRouter>
		);
	}
}


export default App;
