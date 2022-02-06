import React from 'react';
import classes from './InformationCard.module.css';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const InformationCard = () => {
    return(
        <div className={classes['info-card']}>
            <Portfolio />
            <Skills />
            <Contact />
        </div>
    );
}

export default InformationCard;