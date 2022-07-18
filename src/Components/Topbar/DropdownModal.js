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
                    <li onClick={props.hideDropdown}><a href="#portfolio">[Portfolio]</a></li>
                    <li onClick={props.hideDropdown}><a href="#skills">[Skills]</a></li>
                    <li onClick={props.hideDropdown}><a href="#experience">[Experience]</a></li>
                    <li onClick={props.hideDropdown}><a href="#contact">[Contact]</a></li>
                    <li onClick={props.hideDropdown}><a href="https://drive.google.com/file/d/1zMIJ5iGvL-SV95c5FuvUMY4eXBp4ft0V/view?usp=sharing" target="_blank" rel="noopener noreferrer">[Resume]</a></li>
                </ul>
            </Card>
        </React.Fragment>
    );
}

export default DropdownModal;