import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';

class App extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element = {<Welcome/>} />
				</Routes>
			</BrowserRouter>
		);
	}
}


export default App;
