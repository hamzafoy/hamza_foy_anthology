/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './BodySection.css';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating Body Component  ::::::::
::::::::::::::::::::::::::::::::::::::::*/

class BodySection extends React.Component {
    render() {

        return(
            <div className="body-section-container">

                <div className="body__layered-step-divider layered-step-white-bottom">
                
                </div>

                <section className="body">

                    <h1 className="project-list__label">
                        Completed Projects
                    </h1>
                    
                    <aside className="project-list__item">

                        <h1 className="item__label">
                            Kebab on Wheels
                        </h1>

                        <p className="item__text">
                            I developed this website for food truck owner Abdullah Mahmoud. I utilize 
                            Surge.sh SSG to push updates requested by client in a swift fashion.<br/><br/>

                            Tech Used: CSS3, HTML5, JavaScript
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            Ihya502 Podcast
                        </h1>

                        <p className="item__text">
                            I developed this full-stack web app for a local podcast I produce. I have the 
                            front end hosted on Vercel &amp; the back end hosted on Heroku.<br/><br/>

                            Tech Used: CSS3, Express.js, MongoDB, Mongoose, Node.js, React.js
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            PSAP Peeker
                        </h1>

                        <p className="item__text">
                            PSAPs are the direct lines to various 911 agencies across the United States. I 
                            developed this app to make it easier for dispatchers in Louisville to search a PSAP 
                            to route personnel or customers. This is a MERN app.<br/><br/>

                            Tech Used: CSS3, Express.js, MongoDB, Mongoose, Node.js, React.js
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            Mishkat's Makeup
                        </h1>

                        <p className="item__text">
                            I developed this MVC web app for my wife who wanted to begin blogging about her 
                            experience with makeup. Views are rendered for the user using the Pug templating 
                            engine.<br/><br/>

                            Tech Used: CSS3, Express.js, MongoDB, Mongoose, Node.js, Pug
                        </p>

                    </aside>

                </section>

                <div className="body__layered-step-divider layered-step-white-top">
                
                </div>

            </div>
        )

    }
}



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Exporting Body Component  :::::::
::::::::::::::::::::::::::::::::::::::::*/

export default BodySection;