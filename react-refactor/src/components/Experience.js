import React, { useState } from 'react';
import CollapsibleTriggerWord from './CollapsibleTriggerWord';

export default () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="experience">
        <h3 className="collapsible-header" >
            <span onClick={() => setIsOpen(!isOpen)} onKeyPress={() => setIsOpen(!isOpen)} tabIndex={0}>
                <CollapsibleTriggerWord triggerWord="experience" />
            </span>
            {` = () => {${!isOpen ? '};' : ''}`}
        </h3>
        {isOpen && (
            <>
                <article>
                    <ul>
                        <li>
                            <h3><a href="https://www.libertymutual.com/" target="_blank" rel="noopener noreferrer">Liberty Mutual Insurance</a></h3>
                            <h4>June 2019 to present</h4>
                            <p>I'm part of an award-winning team that creates web applications for Liberty's Global Leadership, Learning, and Talent (GLLT) division. We primarily develop Node/React/Redux front ends with Java Spring Boot & PostgresSQL back ends. We are dedicated Agile practicioners.</p>
                        </li>
                    </ul>
                </article>
                <h3>{'};'}</h3>
            </>
        )}
    </div>
  );
}
