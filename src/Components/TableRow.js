import React, { Component } from 'react';
import './TableRow.css';

export default class TableRow extends Component {
    
    getHeader(){
        return (
            <div className='tableRow-container'>
                <div className='tableRow-header-useridCell'>
                    <p className='tableRow-cell-font'>User ID</p>
                </div>
                <div className='tableRow-header-nameCell'>
                    <p className='tableRow-cell-font'>Name</p>
                </div>
                <div className='tableRow-header-departmentCell'>
                    <p className='tableRow-cell-font'>Department</p>
                </div>
                <div className='tableRow-header-classCell'>
                    <p className='tableRow-cell-font'>Class</p>
                </div>  
                <div className='tableRow-header-yearCell'>
                    <p className='tableRow-cell-font'>Year</p>
                </div>
                <div className='tableRow-header-intimeCell'>
                    <p className='tableRow-cell-font'>In time</p>
                </div>
                <div className='tableRow-header-outtimeCell'>
                    <p className='tableRow-cell-font'>Out time</p>
                </div>
            </div>
        )
    }
    
    getRows(){
        return (
            <div className='tableRow-container'>
                <div className='tableRow-useridCell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.userid}</p>
                </div>
                <div className='tableRow-nameCell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.name}</p>
                </div>
                <div className='tableRow-departmentCell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.department}</p>
                </div>
                <div className='tableRow-classCell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.class}</p>
                </div>  
                <div className='tableRow-yearCell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.year}</p>
                </div>
                <div className='tableRow-intimeCell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.in_time}</p>
                </div>
                <div className='tableRow-outtimeCell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.out_time}</p>
                </div>
            </div>
        )
    }
    render(){
        if(this.props.isHeader){
            return this.getHeader();
        }
        else{
            return this.getRows();
        }
    }
}
