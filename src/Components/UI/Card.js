import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = "card " + props.classList;
    // const divClasses = `${classes.card}`

    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;