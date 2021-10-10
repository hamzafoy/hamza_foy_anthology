/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './NavBar.css';
import github from './resources/svg/github.svg';
import linkedin from './resources/svg/linkedin.svg';
import resume from './resources/svg/resume.svg';
import whatsapp from './resources/svg/whatsapp.svg';
import resumePDF from './resources/doc/Hamza_Foy_Resume.pdf';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Navigation Bar Component  ::
::::::::::::::::::::::::::::::::::::::::*/

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: ['Freelance Web Developer', 'Active Community Member', 'Junior Full-Stack Engineer', 'Small Business Aficionado', 'Marketing Content Designer']
        }
    }

    render() {
        const dayAndNight = new Date().getHours();
        let randomNumber = Math.floor((Math.random() * 5));

        return(
            <div className="nav-bar-container">

                <section className="nav-bar__header">

                    <span className="header__logo" alt="Hamza Foy Web Design">

                    </span>

                    <h1 className="header__byline">
                        <strong>Hamza Foy</strong> <br/> {this.state.titles[randomNumber]} by {dayAndNight >= 8 && dayAndNight <= 20 ? 'day' : 'night'}!
                    </h1>

                </section>

                <section className="nav-bar__icons">

                    <a 
                    href="https://github.com/hamzafoy" 
                    target="_blank" 
                    rel="noreferrer"
                    >

                        <img 
                        className="icon" 
                        src={github} 
                        alt="Hamza's Github"
                        />

                    </a>

                    <a 
                    href="https://www.linkedin.com/in/ross-hamza-foy/" 
                    target="_blank" 
                    rel="noreferrer"
                    >

                        <img 
                        className="icon" 
                        src={linkedin} 
                        alt="Hamza's LinkedIn"
                        />

                    </a>

                    <a 
                    href={resumePDF} 
                    target="_blank" 
                    rel="noreferrer" 
                    download
                    >

                        <img 
                        className="icon" 
                        src={resume} 
                        alt="Hamza's Resume"
                        />

                    </a>

                    <a 
                    href="https://api.whatsapp.com/send?phone=15029308391&text=Hello!" 
                    target="_blank" 
                    rel="noreferrer"
                    >

                        <img 
                        className="icon" 
                        src={whatsapp} 
                        alt="Hamza's Whatsapp"
                        />

                    </a>

                </section>

            </div>
        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
::  Exporting Navigation Bar Component  ::
::::::::::::::::::::::::::::::::::::::::*/

export default NavBar;