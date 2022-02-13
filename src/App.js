import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Adam', age: 31 },
      { id: '2', name: 'Anda', age: 21 },
      { id: '3', name: 'Kata', age: 41 }
    ],
    userName: 'ALLUSER',
    showPersons: false,
    textLength: 0,
    text: ''
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

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red')
    }

    if (this.state.persons.length <=1) {
      classes.push('bold')
    }

    if (this.state.showPersons) {
      persons = ( 
        <div> 
          {this.state.persons.map((person, personIndex) => {
            return <Person
            click = {() => this.deletePersonHandler(personIndex)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangeHandler(event, person.id)}
            />
          })} 
        </div>
      );

    }

    return ( 
        <div className = "App" >
          <h1> Hi, I 'm a React App</h1> 
          <p className={classes.join(' ')}> This is working! </p> 
          <button className="button" onClick = { this.togglePersonsHandler }>
             Toggle persons 
          </button>
          { persons }
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;