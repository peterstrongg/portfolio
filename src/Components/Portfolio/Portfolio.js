import React from 'react';
import classes from './Portfolio.module.css';

import PortfolioItem from './PortfolioItem';
import redditAnalyticsDemo from '../../Assets/Demos/reddit_analytics_demo.gif';
import populationAnalyticsDemo from '../../Assets/Demos/population_analytics.gif';

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
        liveDemo: true

    },
    {
        photo: populationAnalyticsDemo,
        projectName: 'Analysis on Happiness Levels',
        languages: 'Python, Anaconda, Matplotlib, NumPy, Pandas, and Jupyter Notebook',
        content: `This project uses an open source dataset containing the happiness levels from various years of countries around the globe.
                    Using this dataset, graphs are generated using Matplotlib to visualize the data in an interesting, easy to digest form.`,
        demoLink: 'https://github.com/peterstrongg/CSC223-Final-Project/blob/main/main.ipynb',
        codeLink: 'https://github.com/peterstrongg/CSC223-Final-Project/blob/main/main.ipynb',
               
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
                    liveDemo={project.liveDemo}
                />
            })}
        </div>        
    );
}

export default Portfolio;