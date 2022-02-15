import React, { Component } from 'react';

class ValidationComponent extends Component {
  state = {  } 
  render() {
    let lengthValidation = null
    if (this.props.textLength < 5 ) {
      lengthValidation = (
         <div>Text is too short</div>
      )
    } else {
      lengthValidation = (
         <div>Text is long enough</div>
      )
    }
    return (lengthValidation);
  }
}
 
export default ValidationComponent;