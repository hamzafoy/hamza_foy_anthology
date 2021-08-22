import React from 'react';
import './ParallaxHeader.css';
import ReactAnime from 'react-anime';
const { Anime } = ReactAnime;



class ParallaxHeader extends React.Component {
    render() {
        

        return (

            <div className="parallax-container">

                <section className="parallax-header">
                    <h1 className="parallax-header__heading">
                        This is a temporary header to test font choices.
                    </h1>
                    <p className="parallax-header__text">
                        This is also to test <code>react-parallax</code>.
                    </p>

                    {/* <Anime>
                    
                    </Anime> */}
                    

                </section>

            </div>

        )

    }
}



export default ParallaxHeader;

/* <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="150"
                        height="150"
                    >
                        <g>
                            <path
                                id="arrow"
                                fill='#FFFFFF'
                                d="M18.2 7.6c-.4 0-.7.1-.9.4L13 12.6c-.5.5-1.4.5-1.9 0L6.8 8c-.3-.2-.6-.4-1-.4-1.1 0-1.7 1.3-.9 2.1l6.2 6.8c.5.6 1.4.6 1.9 0l6.2-6.8c.6-.8 0-2.1-1-2.1z">
                            </path>
                        </g>
                        <g>
                            <path 
                                id="double-arrow"
                                fill='#FFFFFF'
                                visibility='hidden'
                                d="M18.2 11.9c-.4 0-.7.1-.9.4l-4.3 4.6c-.5.5-1.4.5-1.9 0l-4.3-4.6c-.2-.3-.6-.4-.9-.4-1.1 0-1.7 1.3-.9 2.1l6.2 6.8c.5.6 1.4.6 1.9 0l6.2-6.8c.6-.8 0-2.1-1.1-2.1zM18.2 3.3c-.4 0-.7.1-.9.4l-4.3 4.6c-.5.5-1.4.5-1.9 0L6.5 3.7c-.3-.2-.6-.4-1-.4-1.1 0-1.7 1.3-.9 2.1l6.2 6.8c.5.6 1.4.6 1.9 0l6.2-6.8c.6-.8 0-2.1-1.1-2.1z">
                            </path>
                        </g>
                    </svg> */