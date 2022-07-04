import React from 'react';
import classes from './ExperienceNode.module.css';
import Card from '../UI/Card';

const ExperienceNode = props => {
    return(
        <Card classList={classes['exp-node-container']}>
            <div className={classes['experience-row']}>
                <div className={classes['exp-img']}>
                    <img src={props.photo} alt='AP Logo'/>
                </div>
                <div className={classes['exp-description']}>
                    <p><b>Position: </b>{props.name}</p>
                    <p><b>Duration: </b>{props.duration}</p>
                    <p><b>Tasks: </b>{props.tasks}</p>
                </div>
            </div>
        </Card>
    );
}

export default ExperienceNode;