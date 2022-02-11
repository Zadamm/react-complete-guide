import React, { Component } from 'react';

import './UserOutput.css'

class UserOutput extends Component {
  render() { 
    const style = {
      fontSize: 'large'
    };
    return (
      <div className='useroutput'>
        <p style={style}>
          Első szöveg {this.props.userName}
        </p>
        <p>
          Második szöveg
        </p>
      </div>
    );
  }
}
 
export default UserOutput;