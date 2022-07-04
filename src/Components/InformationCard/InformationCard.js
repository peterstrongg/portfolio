import React from 'react';
import classes from './InformationCard.module.css';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

const InformationCard = () => {
    return(
        <div className={classes['info-card']}>
            <div id="portfolio"><Portfolio /></div>           
            <div id="skills"><Skills /></div>
            <div id="experience"><Experience /></div>
            <div id="contact"><Contact /></div>          
        </div>
    );
}

export default InformationCard;