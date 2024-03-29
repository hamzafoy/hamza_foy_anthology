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

                <h1 className="project-list__label">
                    Completed Projects
                </h1>

                <section className="body">

                    <aside className="project-list__item">

                    <h1 className="item__label">
                        <a
                        href="https://www.westendadhc.com/"
                        target="_blank"
                        rel="noreferrer"
                        >
                            West End Adult Day Healthcare
                        </a>
                    </h1>

                    <p className="item__text">
                        I developed this full-stack application to render a front-facing website 
                        for visitors with a form sending submitted data to a Google Sheet for 
                        client's use.<br/><br/>

                        Tech Used: JavaScript, React.js, <code>axios</code>, CSS3, Google Sheets API
                    </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="https://ihya502.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Ihya502 Podcast
                            </a>
                        </h1>

                        <p className="item__text">
                            I developed this full-stack web app for a local podcast I produce. I have the 
                            front end hosted on Vercel &amp; the back end hosted on Heroku.<br/><br/>

                            Tech Used: CSS3, Express.js, MongoDB, Mongoose, Node.js, React.js, <code>react-router</code>, SVG Animations
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="https://github.com/hamzafoy/psap-peeker"
                            target="_blank"
                            rel="noreferrer"
                            >
                            PSAP Peeker
                            </a>
                        </h1>

                        <p className="item__text">
                            PSAPs are the direct lines to various 911 agencies across the United States. I 
                            developed this app to make it easier for dispatchers in Louisville to search a PSAP 
                            to route personnel or customers. This is a MERN app. <strong>Please note that the phone 
                            numbers on this app are not the private PSAPs, but rather public-facing non-emergency 
                            numbers currently.</strong><br/><br/>

                            Tech Used: <code>axios</code>, CSS3, Express.js, MongoDB, Mongoose, Node.js, React.js, <code>react-router</code>
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="http://kebabwheels.com/"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Kebab on Wheels
                            </a>
                        </h1>

                        <p className="item__text">
                            I developed this website for food truck owner Abdullah Mahmoud. I utilize 
                            Surge.sh SSG to push updates requested by client in a swift fashion.<br/><br/>

                            Tech Used: CSS3, HTML5, JavaScript
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="https://secret-shelf-87305.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Chaterday Chatroom
                            </a>
                        </h1>

                        <p className="item__text">
                            I developed this small chatroom application to demonstrate learning
                            about Sockets.io and chat history logged to a Google Sheet.<br/><br/>

                            Tech Used: JavaScript, JQuery, Sockets.io, Google Sheets API
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="https://github.com/hamzafoy/mishkat_makeup_app"
                            target="_blank"
                            rel="noreferrer"
                            >
                            Mishkat's Makeup
                            </a>
                        </h1>

                        <p className="item__text">
                            I developed this MVC web app for my wife who wanted to begin blogging about her 
                            experience with makeup. Views are rendered for the user using the Pug templating 
                            engine.<br/><br/>

                            Tech Used: CSS3, Express.js, MongoDB, Mongoose, Node.js, Pug
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="https://github.com/hamzafoy/impact-athletes-lou"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Impact Athletics
                            </a>
                        </h1>

                        <p className="item__text">
                            I developed this athletics philanthropy website using React. 
                            The website is deployed via Vercel to allow for quick changes that utilize a GoDaddy domain.<br/><br/>

                            Tech Used: CSS3, HTML5, Open Graph, React.js, <code>react-router</code>
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="http://porcus-verto.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Pig Latin Translator
                            </a>
                        </h1>

                        <p className="item__text">
                            I developed this app as a playful way to translate English sentences into Pig Latin. Credit goes to 
                            Purdue University for their comprehensive content detailing morphology of Pig Latin.<br/><br/>

                            Tech Used: CSS3, Express.js, Pug, RegEx, Vanilla JavaScript
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="https://hamza-is-learning-a-bit-3.surge.sh/"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Mintbean Learn-a-Bits
                            </a>
                        </h1>

                        <p className="item__text">
                            I belong to the Mintbean Developer community and regularly participate in their challenges &amp; hackathon. This 
                            is just one example of the development challenges they issue called Learn-a-Bits.<br/><br/>

                            Tech Used: CSS3, HTML5, Responsive Layout Design
                        </p>

                    </aside>

                    <aside className="project-list__item">

                        <h1 className="item__label">
                            <a
                            href="https://github.com/hamzafoy/hangman_interact_game/blob/master/index.js"
                            target="_blank"
                            rel="noreferrer"
                            >
                                Hangman Terminal Game
                            </a>
                        </h1>

                        <p className="item__text">
                            I developed this game as I worked on an overall deployable Hangman game that
                            is intended to be multiplayer. I wanted to test an object I built towards that
                            deployable browser-based game.<br/><br/>

                            Tech Used: Node.js [and built-in <code>readline</code> module], JavaScript
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