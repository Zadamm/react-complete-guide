import React from "react";
import styled from 'styled-components';

// import './Person.css'

const StyledDiv = 
styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px rgb(245, 237, 237);
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
  `;

const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }

  return (
    // <div className="Person" style={style}> 
    <StyledDiv>
      <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </StyledDiv>
    // </div>
    
  )
};

export default person;