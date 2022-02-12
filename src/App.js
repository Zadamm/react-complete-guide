import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import Person from './Person/Person'
import ValidationComponent from './ValidationComponent/ValidationComponent';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

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

  changeUsername = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  textHandler = (event) => {
    this.setState({textLength: event.target.value.length});
    this.setState({text: event.target.value});
  }

  charRemoveHandler = (letterIndex) => {
    let textArray = this.state.text.split("");
    textArray.splice(letterIndex, 1);
    this.setState({text: textArray.join("")})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

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

    let letterArray = null;

    if (this.state.textLength > 0) {
      letterArray = this.state.text.split("").map((letter, letterIndex) => {
        return <CharComponent 
          letter={letter} 
          removeHandler={() => this.charRemoveHandler( letterIndex)}
          key={letterIndex}
        />
      })
    }

    return ( 
    <div className = "App" >
      {/* <h1> Hi, I 'm a React App</h1> 
      <p> This is working! </p> 
      <button 
        style = { style }
        onClick = { this.togglePersonsHandler }> Toggle persons 
      </button> 
      { persons } */}

      <input type="text" onChange={this.textHandler} value={this.state.text}/>
      <p>{this.state.text}</p>
      <div>
        length of the text is: {this.state.textLength}
      </div>
      <ValidationComponent textLength={this.state.textLength}/>
      {letterArray}
      {
        /* <UserInput userNameChangeHandler={this.changeUsername} currentName={this.state.userName}/>
                <UserOutput userName={this.state.userName} currentName/>
                <UserOutput userName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/> */
      } 
    </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;