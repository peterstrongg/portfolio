import React from 'react';
import classes from './DropdownModal.module.css';

import Card from '../UI/Card';

const DropdownModal = (props) => {
    return(
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.hideDropdown} />
            <Card classList={classes['dropdown-modal']}>
                <h1 onClick={props.hideDropdown} className={classes.exit}>&#10093;&#10093;</h1>
                <ul className={classes['dropdown-links']}>
                    <li><a href="home">[Portfolio]</a></li>
                    <li><a href="home">[Skills]</a></li>
                    <li><a href="home">[Contact]</a></li>
                    <li><a href="home">[Resume]</a></li>
                </ul>
            </Card>
        </React.Fragment>
    );
}

export default DropdownModal;