import React, { useState } from 'react';
import '../styles/Bio.scss';
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
                            <p>I do cool stuff...</p>
                        </li>
                    </ul>
                </article>
                <h3>{'};'}</h3>
            </>
        )}
    </div>
  );
}
