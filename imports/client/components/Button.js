import React, { Component } from 'react';

const Button = (props) => {
  return(
    <div>
      <a className= {`waves-effect waves-light btn ${props.color}`}href="/">
      {props.txt}
     </a>
    </div>

  )
}

export default Button;
