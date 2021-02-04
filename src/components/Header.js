import React, { useState, useEffect } from 'react';
import '../styles/Header.scss';
import awlImage from '../images/awl.jpg'

export default () => {
  const skillz = ['React.js', 'Redux', 'Modern JavaScript', 'Express.js', 'Java', 'Spring Framework', 'PostgresSQL', 'MySQL', 'MongoDB', 'Node.js', 'FP&A', 'Business Intelligence', 'HTML5', 'CSS3', 'Agile', 'jQuery', 'RESTful APIs', 'Git', 'CI/CD', 'Process Improvement', 'Sass', 'AWS', 'TDD'];
  let priorIndex = 0;
  const [skill, setSkill] = useState(skillz[priorIndex]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * skillz.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const firstChoice = getRandomNumber();
      const randomIndex = firstChoice === priorIndex ? getRandomNumber() : firstChoice;
      setSkill(skillz[randomIndex]);
      priorIndex = randomIndex;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="heading-contact-container">
        <h1>Hi! I'm Adam, a Full Stack Software Engineer.</h1>
        <p>Reach out:<a href="mailto:adamlacasse@outlook.com?subject=Inquiry from adamlacasse.com">adamlacasse@outlook.com</a></p>
      </div>
        <span id="skillz">{skill}</span>
        <img src={awlImage} alt="Adam LaCasse"></img>
    </header>
  );
}
