import React from 'react';
import Radium from 'radium';

import './Person.css';
 
const person = (props) => {
 
    return(
        <div className='Person' >
            <p onClick={props.click}>My name is {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;