import React from 'react';
import './ParallaxHeader.css';
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow'



function ParallaxHeader() {

    return (
        <div className="parallax-container">

            <section className="parallax-header">

                <h1 className="parallax-header__heading">
                    This is a temporary header to test font choices.
                </h1>
                <p className="parallax-header__text">
                    This is also to test <code>react-parallax</code>.
                </p>
                
            </section>

            <AnimatedArrow/>

        </div>
    )
}



export default ParallaxHeader;