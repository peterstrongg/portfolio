import React from 'react';

import classes from './Skills.module.css';
import SkillNode from './SkillNode';

import htmllogo from '../../Assets/html_logo.png';
import csslogo from '../../Assets/css_logo.png';
import javascriptlogo from '../../Assets/javascript_logo.png';
import reactlogo from '../../Assets/react_logo.png';
import cpluspluslogo from '../../Assets/cplusplus_logo.png';
import pythonlogo from '../../Assets/python_logo.png';
import nodejslogo from '../../Assets/nodejs_logo.png';
import gitlogo from '../../Assets/git_logo.png';
import bootstraplogo from '../../Assets/bootstrap_logo.png';
import anacondalogo from '../../Assets/anaconda.png';


const SKILL_LIST = [
    {
        logo: htmllogo,
        altMsg: 'htmllogo',
        name: 'HTML'
    },
    {
        logo: csslogo,
        altMsg: 'csslogo',
        name: 'CSS'
    },
    {
        logo: javascriptlogo,
        altMsg: 'javascriptlogo',
        name: 'Javascript'
    },
    {
        logo: reactlogo,
        altMsg: 'reactlogo',
        name: 'ReactJS'
    },
    {
        logo: cpluspluslogo,
        altMsg: 'c++logo',
        name: 'C++'
    },
    {
        logo: pythonlogo,
        altMsg: 'pythonlogo',
        name: 'Python'
    },
    {
        logo: anacondalogo,
        altMsg: 'anacondaLogo',
        name: 'Anaconda'
    },
    {
        logo: gitlogo,
        altMsg: 'gitlogo',
        name: 'Git'
    },
    {
        logo: bootstraplogo,
        altMsg: 'bootstraplogo',
        name: 'Bootstrap'
    },
];

const Skills = () => {
    return (
        <div className={classes['skills-container']}>
            <h1>SKILLS</h1>
            <div className={classes['skills-list']}>
                {SKILL_LIST.map(skill => (
                    <SkillNode 
                        logo={skill.logo}
                        altMsg={skill.altMsg}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;