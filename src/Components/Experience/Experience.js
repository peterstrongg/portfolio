import React from 'react';
import classes from './Experience.module.css';
import ExperienceNode from './ExperienceNode';
import apLogo from '../../Assets/ap-logo.png';
import kuLogo from '../../Assets/ku-logo.png';

const experiences = [
    {
        photo: apLogo,
        name: 'IT/Software Engineering Intern at Air Products and Chemicals, Inc.',
        duration: 'May 2022 - August 2022',
        tasks: `Worked with a team of other developers to create software to expedite a part of the hiring process Air
                Products uses to hire contracted employees. Maintained company firewalls ensuring maximum security of data
                passing through each firewall.`
    },
    {
        photo: kuLogo,
        name: 'Computer Science Tutor at Kutztown University',
        duration: 'August 2020 - Present',
        tasks: `Tutor students struggling with computer science concepts. Assist students
                in studying for exams. Provide assistance with programming assignments to students
                who need it.`
    }
]

const Experience = () => {
    return(
        <div className={classes['experience-container']}>
            <h1>EXPERIENCE</h1>
            {experiences.map(exp => (
                <ExperienceNode 
                    photo={exp.photo}
                    name={exp.name}
                    duration={exp.duration}
                    tasks={exp.tasks}
                />
            ))}
        </div>
    );
}

export default Experience;