import React, { Component } from 'react';

const Title = (props) => {
  return(
      <h1 className={props.className}>
        {props.title}
      </h1>

  )
}

export default Title;
