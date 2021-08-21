import React from 'react';
import './BodySection.css';



class BodySection extends React.Component {
    render() {

        return(
            <div className="body-section-container">

                <div className="body__layered-step-divider layered-step-white-bottom">
                
                </div>

                <section className="body">
                    <h1 className="body__heading">
                        This is a temporary body section to test font choices.
                    </h1>
                    <p className="body__text">
                        This is also to test <code>react-parallax</code>.
                    </p>
                </section>

                <div className="body__layered-step-divider layered-step-white-top">
                
                </div>

            </div>
        )

    }
}



export default BodySection;