import React, { Component } from 'react';

import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Auxillary'
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('Appjs constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Adam', age: 31 },
      { id: '2', name: 'Anda', age: 21 },
      { id: '3', name: 'Kata', age: 41 }
    ],
    userName: 'ALLUSER',
    showPersons: false,
    textLength: 0,
    text: '',
    showCockpit: true,
    changeCounter: 0,
    authed: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Appjs getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('Appjs component did mount');
  }

  componentDidUpdate() {
    console.log('Appjs component did update');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {persons: persons, changeCounter: prevState.changeCounter + 1};
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = (params) => {
    this.setState({authed: true})
  }

  render() {
    console.log('Appjs render');
    let persons = null;

    if (this.state.showPersons) {
      persons = ( 
        <div>  
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthed={this.state.authed}
          />

        </div>
      );
    }

    return ( 
        <Aux>
          <button 
            onClick={() => {
              this.setState({showCockpit:false})
            }}
          >
            Remove Cockpit
          </button>
          <AuthContext.Provider value={{
            authenticated: this.state.authed, 
            login: this.loginHandler
            }}>
          {this.state.showCockpit ? <Cockpit 
            title={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            /> : null}
          { persons }
          </AuthContext.Provider>
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default WithClass(App, classes.App);