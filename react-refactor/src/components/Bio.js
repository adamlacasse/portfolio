import React from 'react';
import CollapsibleTriggerWord from './CollapsibleTriggerWord';

export default ({openSections, toggleOpenSection}) => {
  const isOpen = openSections.includes('biography');

  return (
    <div className="bio">
        <h3 className="collapsible-header">
            <span onClick={() => toggleOpenSection('biography')} onKeyPress={() => toggleOpenSection('biography')} tabIndex={0}>
                <CollapsibleTriggerWord triggerWord="biography" />
            </span>
            {` = () => {${!isOpen ? '};' : ''}`}
        </h3>
        {isOpen && (
            <>
                <article>
                    <p>
                        I'm a <span className="emphasized-words">full stack software engineer</span>, currently employed full time on an award-winning team at{' '}
                        <a href="https://www.libertymutual.com/" target="_blank" rel="noopener noreferrer">Liberty Mutual Insurance</a>. I specialize in <span className="emphasized-words">React.js</span> and <span className="emphasized-words">Redux</span> front-ends, 
                        and <span className="emphasized-words">Java Spring Boot</span> back-ends with <span className="emphasized-words">PostgreSQL</span> databases - all hosted on{' '}
                        <span className="emphasized-words">AWS</span>. I also have experience in a potpourri of other technologies.
                    </p>
                    <hr />
                    <p>
                        I've been a full stack engineer since 2018, when I effected a pretty big career change. 
                        I had worked in <span className="emphasized-words">financial planning &amp; analysis</span> in the real estate and legal industries 
                        since 2000 - most recently spending three years as Director of Administration (effectively COO) for New Hampshire's
                        second-largest law firm.
                    </p>
                    <p>
                        Despite achieving success in the legal industry and having worked on some outstanding teams, as I rose the ranks and looked down the pike
                        I realized that I missed the true collaboration and creativity that fueled me earlier in my career. So, I quit my job (amicably) and
                        enrolled in University of New Hampshire's <a href="https://bootcamp.unh.edu/" target="_blank" rel="noopener noreferrer">Coding Boot Camp</a>.
                    </p>
                    <p>
                        After graduating the boot camp I enjoyed a few contract gigs and did some freelance work before landing at Liberty Mutual, where I've been since June 2019.
                    </p>
                </article>
                <h3>{'};'}</h3>
            </>
        )}
    </div>
  );
}
