import React from 'react';
import classes from './Portfolio.module.css';

import PortfolioItem from './PortfolioItem';
import redditAnalyticsDemo from '../../Assets/Demos/reddit_analytics_demo.gif';

const projects = [
    {
        photo: redditAnalyticsDemo,
        projectName: 'Reddit User Analytics',
        languages: 'Javascript, HTML, CSS, ReactJS, and Redux',
        content: `Enter your reddit username to generate statistics determined by your reddit post history and comment history. 
                    Data is generated from your last 100 posts and comments using Reddit's user API. Statistics determined include General profile stats such as 
                    account creation date, any aliases the user used. The application also takes your 100 most recent posts and puts them through a custom sorting algorithm
                    to determine what subreddits the user is most active in and what subreddit the user earned the most upvotes in.`,
        demoLink: 'https://peterstrongg.github.io/react-reddit-user-analytics/',
        codeLink: 'https://github.com/peterstrongg/react-reddit-user-analytics',
        
    },
]

const Portfolio = () => {
    return(
        <div className={classes['portfolio-container']}>
            <h1>PORTFOLIO</h1>
            {projects.map((project) => {
                return <PortfolioItem 
                    photo={project.photo}
                    projectName={project.projectName}
                    languages={project.languages}
                    content={project.content}
                    demoLink={project.demoLink}
                    codeLink={project.codeLink}
                />
            })}
        </div>        
    );
}

export default Portfolio;