import React, { Component } from 'react';
import './TableRow.css';

export default class TableRow extends Component {
  render() {
    return (
        <div className='tableRow-container'>
            <div className='tableRow-cell'>
                <p className='tableRow-cell-font'>User ID</p>
            </div>
            <div className='tableRow-cell'>
                <p className='tableRow-cell-font'>Name</p>
            </div>
            <div className='tableRow-cell'>
                <p className='tableRow-cell-font'>Department</p>
            </div>
            <div className='tableRow-cell'>
                <p className='tableRow-cell-font'>Class</p>
            </div>  
            <div className='tableRow-cell'>
                <p className='tableRow-cell-font'>Year</p>
            </div>
            <div className='tableRow-cell'>
                <p className='tableRow-cell-font'>In time</p>
            </div>
            <div className='tableRow-cell'>
                <p className='tableRow-cell-font'>Out time</p>
            </div>
        </div>
    )
  }
}
