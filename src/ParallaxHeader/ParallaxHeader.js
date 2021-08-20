import React from 'react';
import './ParallaxHeader.css';



class ParallaxHeader extends React.Component {
    render() {

        return(
            <div className="parallax-container">
                <header className="parallax-header">
                    <h1 className="parallax-header__heading">
                        This is a temporary header to test font choices.
                    </h1>
                    <p className="parallax-header__text">
                        This is also to test <code>react-parallax</code>.
                    </p>
                </header>
            </div>
        )
        
    }
}



export default ParallaxHeader;