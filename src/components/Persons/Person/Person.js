import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/WithClass';
import classes from './Person.css'
import AuthContext from './../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
  }

  render() { 
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
        </AuthContext.Consumer>
        <p key="1" onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        <p key="2">{this.props.children}</p>
        <input 
          key="3"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl
          // }}
          ref = {this.inputElementRef}
          type="text" 
          value={this.props.name}
          onChange={this.props.changed}
         />
      </React.Fragment>
    );
  }
}
 
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);