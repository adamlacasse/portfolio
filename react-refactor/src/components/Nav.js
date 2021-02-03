import React from 'react';
import '../styles/Nav.scss';
import reactRedux from '../images/react-redux.png';
import nodeJs from '../images/nodejs.png';
import postgresImg from '../images/postgresql.svg';
import expressImg from '../images/express.png';
import springBootImg from '../images/spring-boot.svg';
import javaImg from '../images/java.svg';
import javascriptImg from '../images/javascript.svg';

export default () => {
    return (
        <nav>
            <div className="ul-container">
                <ul>
                    <li>
                        <h5>{'// Click to navigate to the section'}</h5>
                    </li>
                    <li className="collapsible-header">
                        let{' '}
                        <span 
                            tabIndex={0} 
                            onClick={() => console.log('farts!')} 
                            onKeyPress={() => console.log('farts!')}
                        >
                            biography
                        </span>;
                    </li>
                    <li className="collapsible-header">
                        let{' '}
                        <span 
                            tabIndex={0} 
                            onClick={() => console.log('farts!')} 
                            onKeyPress={() => console.log('farts!')}
                        >
                            experience
                        </span>;
                    </li>
                    <li className="collapsible-header">
                        let{' '}
                        <span 
                            tabIndex={0} 
                            onClick={() => console.log('farts!')} 
                            onKeyPress={() => console.log('farts!')}
                        >
                            eductation
                        </span>;
                    </li>
                    <li className="collapsible-header mb">
                        let{' '}
                        <span 
                            tabIndex={0} 
                            onClick={() => console.log('farts!')} 
                            onKeyPress={() => console.log('farts!')}
                        >
                            projectSamples
                        </span>;
                    </li>
                    <li className="collapsible-header">
                        const{' '}
                        <span 
                            tabIndex={0} 
                            onClick={() => console.log('farts!')} 
                            onKeyPress={() => console.log('farts!')}
                        >
                            showOrHideAll
                        </span>
                        {' = () => { // try me };'}
                    </li>
                </ul>
            </div>
            <div>
                <img src={javascriptImg} alt="javaScript logo" />
                <img src={nodeJs} alt="node.js logo" />
                <img src={reactRedux} alt="react-redux logo" />
                <img src={expressImg} alt="express.js logo" />
                <img src={javaImg} alt="java logo" />
                <img src={springBootImg} alt="Spring Boot logo" />
                <img src={postgresImg} alt="PostgresSQL logo" />
            </div>
        </nav>
    );
};
