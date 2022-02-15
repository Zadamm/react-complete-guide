import React, { PureComponent } from 'react';

import Person from './Person/Person'
class Persons extends PureComponent {
  // static getDerivedStateFromProps(state) {
  //   console.log('Personsjs getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('Recived props: ', props);
  // }


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Personsjs Should component update');
  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //       ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Personsjs getSnapshotBeforeUpdate'); 
    return {message: 'Snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Personsjs componentdidupdate', snapshot);
  }

  render() { 
    return this.props.persons.map((person, personIndex) => {
      return <Person
        click = {() => this.props.clicked(personIndex)}
        name = {person.name}
        age = {person.age}
        key = {person.id}
        changed = {(event) => this.props.changed(event, person.id)}
        authed = {this.props.isAuthed}
      />
    });
  }
}
 
export default Persons;