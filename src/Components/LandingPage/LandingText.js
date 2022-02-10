import React from 'react';
import classes from './LandingText.module.css';

import logo from '../../Assets/altlogo.png'
import githublogo from '../../Assets/github_logo_white.png';
import linkedinlogo from '../../Assets/linkedin_logo_white.png';

const LandingText = () => {
    return(
        <div className={classes['landing-text-container']}>
            <img src={logo} alt={'peterstrong.dev'} className={classes['landing-page-logo']} />
            <div className={classes['link-bar']}>
                <a href="https://www.github.com/peterstrongg" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt={'peterstrong.dev'}  /></a>
                <a href="https://www.linkedin.com/in/peter-strong-2440691ba/" target="_blank" rel="noopener noreferrer"><img src={linkedinlogo} alt={'peterstrong.dev'}  /></a>
            </div>
            
        </div>
    );
};

export default LandingText;