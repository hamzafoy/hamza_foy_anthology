/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './ParallaxHeader.css';
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

                    <h1 className="parallax-header__heading">
                        This is a temporary header to test font choices.
                    </h1>

                    <p className="parallax-header__text">
                        This is also to test <code>react-parallax</code>.
                    </p>

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