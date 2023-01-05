import React, { Component } from 'react';
import QrReader from 'modern-react-qr-reader';
import {withRouter} from './Navigate';
import apis from '../utilities/api';
import './QRScanner.css';

class QRScanner extends Component {
    constructor(props){
        super(props);
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    handleScan(data){
        if(data){
            apis.markAttendance({QRString:data});
            this.props.navigate('/Dashboard');
        }
    }
    handleError(err){
        console.error(err)
    }
    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        }
        return (
            <div className='qrcscanner-main'>
                
                    <QrReader
                        delay={300}
                        facingMode={"environment"}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={previewStyle}
                    />
               
                <p>Scanning...</p>
            </div>
        )
    }
}

export default withRouter(QRScanner);
