import React from 'react';
import classes from './LandingPage.module.css';
import TopBar from '../Topbar/Topbar';
import LandingText from './LandingText';

const LandingPage = () => {
    return (
        <div className={classes['landing-page-container']}>
            <TopBar />
            <LandingText />
            {/* <BackgroundAnimation /> */}
        </div>
    );
}

export default LandingPage;