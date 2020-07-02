import React from 'react';
import '../styles/Header.scss';
import reduxImage from '../images/react-redux.png'

export default () => {
  return (
    <header>
        <h1>Hi, I'm Adam.</h1>
        <img src={reduxImage}></img>
    </header>
  );
}
