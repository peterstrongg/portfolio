import React from 'react';
import classes from './SkillNode.module.css';

const SkillNode = props => {
    return(
        <div className={classes['skill-node']}>
            <img src={props.logo} alt={props.altMsg} />
            <p>{props.name}</p>
        </div>
    );
};

export default SkillNode;