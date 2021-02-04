import React from 'react';

export default ({openSections, toggleOpenSection}) => {
    const isOpen = openSections.includes('projectSamples');

  return (
    <div className="project-samples">
        <h3 className="collapsible-header" >
            <span onClick={() => toggleOpenSection('projectSamples')} onKeyPress={() => toggleOpenSection('projectSamples')} tabIndex={0}>
                projectSamples
            </span>
            {` = () => {${!isOpen ? '};' : ''}`}
        </h3>
        {isOpen && (
            <>
                <article>
                    <ul>
                        <li>
                            <h3><a href="https://github.com/adamlacasse" target="_blank" rel="noopener noreferrer">See My GitHub Profile</a></h3>
                            <p>I'll post some samples here later ;-)</p>
                        </li>
                    </ul>
                </article>
                <h3>{'};'}</h3>
            </>
        )}
    </div>
  );
}
