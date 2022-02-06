import React from 'react';
import classes from './ContactNode.module.css';
import Card from '../UI/Card';

const ContactNode = props => {
    return (
        <Card classList={classes['contact-node']}>
            <img className={classes['contact-logo']} src={props.image} alt={props.altMsg} />
            <p>{props.description}</p>
        </Card>
    );
}

export default ContactNode;