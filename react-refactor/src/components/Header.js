import React from 'react';
import '../styles/Header.scss';
import awlImage from '../images/awl.jpg'

export default () => {
  return (
    <header>
        <h1>Hi! I'm Adam, a Full Stack Software Engineer.</h1>
        <img src={awlImage} alt="Adam LaCasse"></img>
    </header>
  );
}
