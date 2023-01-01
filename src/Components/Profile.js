import React, { Component } from 'react';
import './Profile.css';
import Navbar from './Navbar';
import userImage from '../resourses/images/user.png';
import apis from '../utilities/api';
import Button from './Button';


export default class Profile extends Component {
    constructor(){
        super()
        this.state = {
            Name:'',
            UserID:'',
            Department:'',
            Class:'',
            Year:'',
            Email:'',
            Contact:'',
            updateRequest : false,
        }
        this.updateUser = this.updateUser.bind(this);
    }
    componentDidMount(){
        apis.getUserDetails(this.updateUser);
    }

    updateUser(details){
        this.setState({
            Name: details.name,
            UserID: details.userid,
            Department: details.department,
            Class: details.class,
            Year: details.year,
            Email: details.email,
            Contact: details.contact,
            updateRequest:false,
        })
    }

    handleSaveUpdate(){
        const payload = {
            Name:this.state.Name,
            UserID:this.state.UserID,
            Department:this.state.Department,
            Class:this.state.Class,
            Year:this.state.Year,
            Email:this.state.Email,
            Contact:this.state.Contact,
        }
        apis.updateUserData(payload);
        this.setState({updateRequest:false});
    }

    renderData(){
        if(!this.state.updateRequest){
            return(
                <>
                <div className='profile-information-entity'>
                    Name: {this.state.Name}
                </div>
                <div className='profile-information-entity'>
                    User ID: {this.state.UserID}
                </div>
                <div className='profile-information-entity'>
                    Department: {this.state.Department}
                </div>
                <div className='profile-information-entity'>
                    Class: {this.state.Class}
                </div>
                <div className='profile-information-entity'>
                    Year: {this.state.Year}
                </div>
                <div className='profile-information-entity'>
                    Email: {this.state.Email}
                </div>
                <div className='profile-information-entity'>
                    Contact: {this.state.Contact}
                </div>
                </>
            )
        }
        else{
            const textBoxStyle = {width:'10vw',height:'1vw' }
            return(
                <>
                    <div className='profile-information-entity'>
                        Name: <input style={textBoxStyle} name = 'Name' type="text" value={this.state.Name} onChange={(e)=>this.setState({Name:e.target.value})}/>
                    </div>
                    <div className='profile-information-entity'>
                        User ID: {this.state.UserID}
                    </div>
                    <div className='profile-information-entity'>
                        Department: <input style={textBoxStyle} name = 'Department' type="text" value={this.state.Department} onChange={(e)=>this.setState({Department:e.target.value})}/>
                    </div>
                    <div className='profile-information-entity'>
                        Class: <input style={textBoxStyle} name = 'Class' type="text" value={this.state.Class} onChange={(e)=>this.setState({Class:e.target.value})}/>
                    </div>
                    <div className='profile-information-entity'>
                        Year: <input style={textBoxStyle} name = 'Year' type="number" value={this.state.Year} onChange={(e)=>this.setState({Year:e.target.value})}/>
                    </div>
                    <div className='profile-information-entity'>
                        Email: <input style={textBoxStyle} name = 'Email' type="text" value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})}/>
                    </div>
                    <div className='profile-information-entity'>
                        Contact: <input style={textBoxStyle} name = 'Contact' type="text" value={this.state.Contact} onChange={(e)=>this.setState({Contact:e.target.value})}/>
                    </div>
                </>
            )
        }
    }
    getActionButtons(){
        if(!this.state.updateRequest){
            return <div onClick = {()=>this.setState({updateRequest:true})}><Button action_name='Update'></Button></div>
        }
        else return (
            <div className='profile-action-buttons'>
                <div onClick = {()=>this.handleSaveUpdate()}><Button action_name='Save'></Button></div>
                <div onClick = {()=>apis.getUserDetails(this.updateUser)}><Button action_name='Cancel'></Button></div>
            </div>
        )
    }


    render() {
        return (
            <div className='profile-container'>
                <Navbar isHomePage = {0} />
                <div className='profile-display-box'>
                    <img alt="user" src = {userImage} className='profile-image'/>
                    <div className='profile-user-information'>
                        {this.renderData()}
                    </div>
                </div>
                {this.getActionButtons()}
            </div>
        )
    }
}
