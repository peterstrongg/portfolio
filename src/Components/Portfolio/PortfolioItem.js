import React from 'react';

import Card from './../UI/Card';
import classes from './PortfolioItem.module.css';
import Photo from '../../Assets/tempimg.jpg';

const PortfolioItem = props => {
    return(
        <Card classList={classes['portfolio-item']}>
            <div className={classes['portfolio-row']}>
                <div className={classes['image-col']}>
                    <img className={classes.photo} src={Photo} alt='space' />
                </div>
                <div className={classes['description-col']}>
                    <h2>Project Name</h2>
                    <p>&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Proin nibh nisl condimentum id. Id donec ultrices tincidunt arcu non. Ultrices dui sapien 
                        eget mi proin sed libero enim sed. Massa tincidunt dui ut ornare lectus sit amet. Lectus proin nibh nisl 
                        condimentum id venenatis a. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Et netus 
                        et malesuada fames ac turpis egestas.</p>
                </div>                 
            </div>
        </Card>
    );

}

export default PortfolioItem;