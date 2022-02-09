import React, { useState, useEffect } from 'react';
import classes from './Topbar.module.css';

import DropdownModal from './DropdownModal';

const COLLAPSE_THRESHOLD = 810;

const Topbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [dropdownShown, setDropdownShown] = useState(false);
    const setWidthHandler = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', (setWidthHandler))

        return (() => {
            window.removeEventListener('resize', setWidthHandler);
        })
    })

    const dropdownShownHandler = () => {
        setDropdownShown(true);
    }

    const dropdownHiddenHandler = () => {
        setDropdownShown(false);
    }

    return (
        <header className={classes.topbar}>
            <h2 className={`${classes.name} ${classes.link}`}>peterstrong.dev</h2>
            {/* <img src={logo} alt={'peterstrong.dev'} className={classes.logo} /> */}
            
            {(width >= COLLAPSE_THRESHOLD) && 
                <nav>                   
                    <ul className={classes.links}>
                        <li><a href="#portfolio" className={classes.link}>Portfolio</a></li>
                        <li><a href="#skills" className={classes.link}>Skills</a></li>
                        <li><a href="#contact" className={classes.link}>Contact</a></li>
                        <li><a href="https://drive.google.com/file/d/1M_LvdXZfJ8LX475c2K6OdOSHfAE8iUOr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={classes.link}>Resume</a></li>
                    </ul>
                </nav>
            }
            {(width < COLLAPSE_THRESHOLD) && 
            <h1 className={classes['dropdown-btn']} onClick={dropdownShownHandler}>≡</h1>
            }
            {dropdownShown && <DropdownModal className={classes.dropdown} hideDropdown={dropdownHiddenHandler} isShown={dropdownShown} />}
        </header>
    );
}

export default Topbar