import React from 'react';
import '../styles/Header.scss';
import awlImage from '../images/awl.jpg'

export default () => {
  return (
    <header>
      <div className="heading-contact-container">
        <h1>Hi! I'm Adam, a Full Stack Software Engineer.</h1>
        <p>Reach out:<a href="mailto:adamlacasse@outlook.com?subject=Inquiry From Your Portfolio Website">adamlacasse@outlook.com</a></p>
      </div>
        <img src={awlImage} alt="Adam LaCasse"></img>
    </header>
  );
}
