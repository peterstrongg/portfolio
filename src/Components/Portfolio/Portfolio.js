import React from 'react';
import classes from './Portfolio.module.css';

import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    return(
        <div className={classes['portfolio-container']}>
            <h1>PORTFOLIO</h1>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>        
    );
}

export default Portfolio;