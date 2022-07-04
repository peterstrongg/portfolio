import React from 'react';

import Card from './../UI/Card';
import classes from './PortfolioItem.module.css';

const PortfolioItem = props => {
    return(
        <Card classList={classes['portfolio-item']}>
            <div className={classes['portfolio-row']}>
                <div className={classes['image-col']}>
                    <img className={classes.photo} src={props.photo} alt='space' />
                </div>
                <div className={classes['description-col']}>
                    <h2>{props.projectName}</h2>
                    <p><b>Created With:</b> {props.languages}</p>
                    <p className={classes['description']}>&emsp;{props.content}</p>
                    <div className={classes['project-links']}>
                        {props.liveDemo && <a href={props.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                        <a href={props.codeLink} target="_blank" rel="noopener noreferrer">Github Page</a>   
                    </div>                  
                </div>                 
            </div>
        </Card>
    );

}

export default PortfolioItem;