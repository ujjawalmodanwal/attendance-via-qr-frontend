import React, { Component } from 'react';
import './TableRow.css';

export default class TableRow extends Component {
    
    getHeader(){
        return (
            <div className='tableRow-container'>
                <div className='tableRow-header-cell'>
                    <p className='tableRow-cell-font'>User ID</p>
                </div>
                <div className='tableRow-header-cell'>
                    <p className='tableRow-cell-font'>Name</p>
                </div>
                <div className='tableRow-header-cell'>
                    <p className='tableRow-cell-font'>Department</p>
                </div>
                <div className='tableRow-header-cell'>
                    <p className='tableRow-cell-font'>Class</p>
                </div>  
                <div className='tableRow-header-cell'>
                    <p className='tableRow-cell-font'>Year</p>
                </div>
                <div className='tableRow-header-cell'>
                    <p className='tableRow-cell-font'>In time</p>
                </div>
                <div className='tableRow-header-cell'>
                    <p className='tableRow-cell-font'>Out time</p>
                </div>
            </div>
        )
    }
    
    getRows(){
        return (
            <div className='tableRow-container'>
                <div className='tableRow-cell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.userid}</p>
                </div>
                <div className='tableRow-cell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.name}</p>
                </div>
                <div className='tableRow-cell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.department}</p>
                </div>
                <div className='tableRow-cell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.class}</p>
                </div>  
                <div className='tableRow-cell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.year}</p>
                </div>
                <div className='tableRow-cell'>
                    <p className='tableRow-cell-font'>{this.props.rowData.in_time}</p>
                </div>
                <div className='tableRow-cell'>
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
