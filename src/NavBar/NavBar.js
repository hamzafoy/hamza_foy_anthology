/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './NavBar.css';
import github from './resources/svg/github.svg';
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

                    <span className="header__advert">
                        Available for Clients
                    </span>

                </section>

                <section className="nav-bar__icons">

                    <a 
                    className="icon__github"
                    href="https://github.com/hamzafoy" 
                    target="_blank" 
                    rel="noreferrer"
                    >

                        <img 
                        className="icon" 
                        src={github} 
                        alt="Hamza's Github"
                        title="Check my repos!"
                        />

                    </a>

                    <a 
                    href="https://www.linkedin.com/in/ross-hamza-foy/" 
                    target="_blank" 
                    rel="noreferrer"
                    >

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon__linkedin"
                        viewBox="0 0 24 24"
                        >

                            <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 
                            3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 
                            8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052
                             6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"></path>
                            
                        </svg>

                    </a>

                    <a 
                    href={resumePDF} 
                    target="_blank" 
                    rel="noreferrer" 
                    download
                    >

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="icon icon__resume"
                        viewBox="0 0 24 24"
                        >
                            <path className="svg-writing" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                            <path className="svg-fold" d="M14 2L14 8 20 8"></path>
                            <path d="M16 13L8 13"></path>
                            <path d="M16 17L8 17"></path>
                            <path d="M10 9L9 9 8 9"></path>
                            </svg>

                    </a>

                    <a 
                    href="https://api.whatsapp.com/send?phone=15029308391&text=Hello!" 
                    target="_blank" 
                    rel="noreferrer"
                    >

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon__whatsapp"
                        viewBox="0 0 24 24"
                        >

                            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 
                            5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 
                            0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0
                             01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 
                             1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 
                             0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 
                             3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941
                              1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 
                              0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 
                              2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 
                              1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                            
                        </svg>

                    </a>

                    <a 
                    href="mailto:hamzaoflouisville@gmail.com"
                    target="_blank" 
                    rel="noreferrer"
                    >

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="icon icon__email"
                        viewBox="0 0 24 24"
                        >

                            <path className="svg-envelope" d="M4 4h16c1.1 0 2 .9 2 2v12c0 
                            1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <path className="svg-envelope-flap" d="M22 6L12 13 2 6"></path>
                            <text className="svg-envelope-text" x="9" y="14.5">T</text>

                        </svg>

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