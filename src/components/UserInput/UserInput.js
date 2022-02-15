import React, { Component } from 'react';

import './UserInput.css'


class UserInput extends Component {
  state = {  } 
  render() { 
    return (
      <input className='userinput' type="text" onChange={this.props.userNameChangeHandler} vlue={this.props.currentName}></input>
    );
  }
}
 
export default UserInput;