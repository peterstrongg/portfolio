import React from 'react';
import classes from './InfoCard.module.css';

const InfoCard = (props) => {

    const classList = `${classes['info-card']} ${props.classList}`;

    return (
        <div className={classList}>{props.children}</div>
    );
}

export default InfoCard;