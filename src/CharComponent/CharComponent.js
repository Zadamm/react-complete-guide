import React, { Component } from 'react';

import './CharComponent.css'

class CharComponent extends Component {
  state = {  } 
  render() { 
    return (
      <div className='char-component' onClick={this.props.removeHandler}>
        {this.props.letter}
      </div>
    );
  }
}
 
export default CharComponent;