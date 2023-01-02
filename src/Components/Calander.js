import React, { Component } from 'react';
import './Calander.css';
import Button from './Button.js';

export default class Calander extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateSelected : '',
        }
        this.getCurrentDate = this.getCurrentDate.bind(this);
    }
    componentDidMount(){
        this.getCurrentDate();
    }

    getCurrentDate(){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const date = yyyy+'-'+mm+'-'+dd;
        this.setState({dateSelected:date});
        this.props.getUserAttendance(date, this.props.updateAttendanceData);
    }

    render() {
        const textBoxStyle = {height:'2vw', margin: '0.8vw', width:'10vw', border:'1px solid grey' ,borderRadius:'5px' }
        if(window.innerWidth<880){
            textBoxStyle.width = "30vw";
            textBoxStyle.height = "6vw";
        }
        return (
            <div className='calander-date-selection'>
                <div>Select Date :</div> 
                <input style ={textBoxStyle} type="date" id="attendance-date" value ={this.state.dateSelected} name="attendance-date" onChange={(e)=>this.setState({dateSelected:e.target.value})}/>
                <div onClick={()=>this.props.getUserAttendance(this.state.dateSelected, this.props.updateAttendanceData)}><Button action_name = 'submit'/></div>
            </div>
        )
    }
}
