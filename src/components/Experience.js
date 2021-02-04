import React from 'react';

export default ({openSections, toggleOpenSection}) => {
    const isOpen = openSections.includes('experience');

  return (
    <div className="experience">
        <h3 className="collapsible-header" >
            <span onClick={() => toggleOpenSection('experience')} onKeyPress={() => toggleOpenSection('experience')} tabIndex={0}>
                experience
            </span>
            {` = () => {${!isOpen ? '};' : ''}`}
        </h3>
        {isOpen && (
            <>
                <article>
                    <ul>
                        <li>
                            <h3><a href="https://www.libertymutual.com/" target="_blank" rel="noopener noreferrer">Liberty Mutual Insurance</a></h3>
                            <h3>Software Engineer</h3>
                            <h4>June 2019 to present</h4>
                            <p>I'm part of an award-winning team that creates web applications for Liberty's Global Leadership, Learning, and Talent (GLLT) division. We primarily develop Node/React/Redux front ends with Java Spring Boot & PostgresSQL back ends. We are dedicated <span className="emphasized-words">Agile</span> practicioners.</p>
                        </li>
                        <li>
                            <h3><a href="https://www.trilogyed.com/" target="_blank" rel="noopener noreferrer">Trilogy Education</a></h3>
                            <h3>Teaching Assistant - Full Stack Web Development</h3>
                            <h4>March 2019 to September 2019</h4>
                            <p>I assisted students in learning full stack web development - specifically the <span className="emphasized-words">MERN stack</span> (MongoDB/MySQL, Express.js, React.js, Node.js)</p>
                        </li>
                        <li>
                            <h3><a href="https://www.theatomgroup.com/" target="_blank" rel="noopener noreferrer">The Atom Group</a></h3>
                            <h3>JavaScript/Web Engineer</h3>
                            <h4>April 2019 to June 2019 and November 2018 to February 2019</h4>
                            <p>Two contract assignments subcontracting with major technology companies on end to end testing with <span className="emphasized-words">Selenium and Nightwatch.js</span>, and enhancing a complex Node.js test harness application.</p>
                        </li>
                        <li>
                            <h3><a href="https://www.devinemillimet.com/" target="_blank" rel="noopener noreferrer">Devine Millimet</a></h3>
                            <h3>Director of Administration</h3>
                            <h4>July 2015 to March 2018</h4>
                            <p>I directed all the day to day operations of the law firm including IT, marketing, finance, HR, and facilities.</p>
                        </li>
                        <li>
                            <h3><a href="https://www.brownrudnick.com/" target="_blank" rel="noopener noreferrer">Brown Rudnick</a></h3>
                            <h3>Director of Financial Planning & Analysis</h3>
                            <h4>February 2005 to June 2015</h4>
                            <p>I was promoted twice, first from financial analyst to manager, then to director. I utilized a number of technologies to improve processes.</p>
                        </li>
                    </ul>
                </article>
                <h3>{'};'}</h3>
            </>
        )}
    </div>
  );
}
