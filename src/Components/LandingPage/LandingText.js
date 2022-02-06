import React from 'react';
import classes from './LandingText.module.css';

import logo from '../../Assets/altlogo.png';

const LandingText = () => {
    return(
        <div className={classes['landing-text-container']}>
            <img src={logo} alt={'peterstrong.dev'} className={classes['landing-page-logo']} />
            <div className={classes['typed-text']}>Full stack web development using React</div>
        </div>
    );
};

export default LandingText;