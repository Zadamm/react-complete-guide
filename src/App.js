import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    persons: [
      { name: 'Adam', age: 31},
      { name: 'Anda', age: 21},
      { name: 'Kata', age: 41}
    ],
    userName: 'ALLUSER'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 31},
        { name: 'Andrea', age: 21},
        { name: 'Katalin', age: 41}
      ] 
    })
  }

  nameChangeHandler = (event) => {
    console.log('changed')
    this.setState({
      persons: [
        { name: 'Adam', age: 31},
        { name: event.target.value, age: 21},
        { name: 'Katalin', age: 41}
      ] 
    })
  }

  changeUsername  = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        {/* <h1>Hi, I'm a React App</h1>
        <p>This is working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Maximmm')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximas')}
          changed={this.nameChangeHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> */}
        <UserInput userNameChangeHandler={this.changeUsername} currentName={this.state.userName}/>
        <UserOutput userName={this.state.userName} currentName/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
