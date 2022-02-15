import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('Cockpitjs useEffect');
    
    toggleBtnRef.current.click();
    // setTimeout(() => {
    //   alert('Saved data to cloud')
    // }, 1000);
    return () => {
      console.log('Cockpitjs cleanup work in useEffect')
    }
  }, [])

  useEffect (() => {
    console.log('Cockpitjs 2. useEffect')
    return () => {
      console.log('Cockpitjs cleanup work in 2. useEffect')
    }
  })

  let btnClass = null;
  let assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.personsLength <=2) {
    assignedClasses.push(classes.red)
  }

  if (props.personsLength <=1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1> 
      <p className={assignedClasses.join(' ')}> This is working! </p> 
      <button ref={toggleBtnRef} className={btnClass} onClick = { props.clicked }>
        Toggle persons 
      </button> 
      <button onClick={props.login}>Log in</button>
    </div>
  );  
}

export default React.memo(cockpit);