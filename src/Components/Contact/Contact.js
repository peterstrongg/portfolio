import React from 'react';
import classes from './Contact.module.css';
import ContactNode from './ContactNode';

import linkedinlogo from '../../Assets/linkedin_logo.png';
import maillogo from '../../Assets/mail_logo.png';

const Contact = () => {
    return(
        <div className={classes['contact-container']}>
            <h1>CONTACT ME</h1>
            <div className={classes['contact-list']}>
                <ContactNode 
                    image={maillogo}
                    altMsg='linkedin logo'
                    description='Email'
                /> 
                <ContactNode 
                    image={linkedinlogo}
                    altMsg='linkedin logo'
                    description='Linkedin'
                />                              
            </div>
        </div>
    );
};

export default Contact;