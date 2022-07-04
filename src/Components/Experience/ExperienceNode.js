import React from 'react';
import classes from './ExperienceNode.module.css';
import Card from '../UI/Card';

const ExperienceNode = props => {
    return(
        <Card classList={classes['exp-node-container']}>
            <p>This is a node</p>
        </Card>
    );
}

export default ExperienceNode;