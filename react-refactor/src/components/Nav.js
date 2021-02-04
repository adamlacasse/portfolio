import React from 'react';
import { defaultOpenSections } from '../helpers/constants';
import '../styles/Nav.scss';
import reactRedux from '../images/react-redux.png';
import nodeJs from '../images/nodejs.png';
import postgresImg from '../images/postgresql.svg';
import expressImg from '../images/express.png';
import springBootImg from '../images/spring-boot.svg';
import javaImg from '../images/java.svg';
import javascriptImg from '../images/javascript.svg';

export default ({openSections, setOpenSections}) => {
    const handleClick = () => {
        if (openSections.length !== defaultOpenSections.length) {
            return setOpenSections(defaultOpenSections);
        }
        return setOpenSections([]);
    };

    return (
        <nav>
            <div className="icon-container">
                <img src={javascriptImg} alt="javaScript logo" />
                <img src={nodeJs} alt="node.js logo" />
                <img src={reactRedux} alt="react-redux logo" />
                <img src={expressImg} alt="express.js logo" />
                <img src={javaImg} alt="java logo" />
                <img src={springBootImg} alt="Spring Boot logo" />
                <img src={postgresImg} alt="PostgresSQL logo" />
            </div>
            <h3 className="collapsible-header">
                <span tabIndex={0} onClick={handleClick} onKeyPress={handleClick}>openOrCloseAllSections</span>
                {' = () => { // try me! }'}
            </h3>
        </nav>
    );
};
