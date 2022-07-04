import React from 'react';
import classes from './Experience.module.css';
import ExperienceNode from './ExperienceNode';

const Experience = () => {
    return(
        <div className={classes['experience-container']}>
            <h1>EXPERIENCE</h1>
            <ExperienceNode />
        </div>
    );
}

export default Experience;