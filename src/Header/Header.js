/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './Header.css';
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow';
import NavBar from '../NavBar/NavBar';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

function ParallaxHeader() {

    return (

        <>

        <NavBar/>

            <div className="parallax-container">

                <section className="nav-bar-filler">

                </section>

                <section className="parallax-header">

                    <aside className="skills-tag-container">

                        <div className="tag-container">

                            <span className="tag-fill">
                                
                                <h1>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="tag__icon"
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    >

                                        <path d="M437.333 213.333c5.888 0 10.667-4.779 
                                        10.667-10.667v-128c0-29.397-23.915-53.333-53.333-53.333H53.333C23.915 
                                        21.333 0 45.269 0 74.667v362.667c0 29.397 23.915 53.333 53.333 53.333h341.333c29.419 
                                        0 53.333-23.936 53.333-53.333v-64c0-5.888-4.779-10.667-10.667-10.667s-10.667 
                                        4.779-10.667 10.667v64c0 17.643-14.357 32-32 32H53.333c-17.643 
                                        0-32-14.357-32-32V128h405.333v74.667c.001 5.888 4.779 10.666 
                                        10.667 10.666zm-416-106.666v-32c0-17.643 14.357-32 32-32h341.333c17.643 
                                        0 32 14.357 32 32v32H21.333z"></path>
                                        <circle cx="53.333" cy="74.667" r="10.667"></circle>
                                        <circle cx="96" cy="74.667" r="10.667"></circle>
                                        <circle cx="138.667" cy="74.667" r="10.667"></circle>
                                        <path d="M224 234.667c-5.888 0-10.667 4.779-10.667 
                                        10.667v32h-42.667v-32c0-5.888-4.779-10.667-10.667-10.667s-10.667 
                                        4.779-10.667 10.667v85.333c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 
                                        10.667-10.667v-32h42.667v32c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 
                                        10.667-10.667v-85.333c0-5.889-4.779-10.667-10.667-10.667zM309.333 
                                        234.667h-42.667c-5.888 0-10.667 4.779-10.667 10.667S260.779 256 266.667 
                                        256h10.667v74.667c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 
                                        10.667-10.667V256h10.667c5.888 0 10.667-4.779 
                                        10.667-10.667s-4.781-10.666-10.669-10.666zM420.075 
                                        235.499c-3.968-1.685-8.555-.768-11.627 2.304L384 
                                        262.251l-24.448-24.469c-3.051-3.029-7.659-3.947-11.627-2.304a10.667 
                                        10.667 0 00-6.592 9.856v85.333c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 
                                        10.667-10.667v-59.584l13.803 13.781c4.16 4.16 10.923 4.16 15.083 
                                        0l13.781-13.781v59.584c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 
                                        10.667-10.645v-85.333a10.668 10.668 0 00-6.593-9.857zM501.333 
                                        320h-32v-74.667c0-5.888-4.779-10.667-10.667-10.667S448 239.445 448 
                                        245.333v85.333c0 5.888 4.779 10.667 10.667 10.667h42.667c5.888 0 10.667-4.779 
                                        10.667-10.667S507.221 320 501.333 320z"></path>
                                        
                                    </svg>

                                </h1>

                            </span>

                        </div>

                    </aside>

                    <AnimatedArrow/>
                    
                </section>

            </div>

        </>
    )

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default ParallaxHeader;