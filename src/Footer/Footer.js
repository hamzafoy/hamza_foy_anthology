/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './Footer.css';



/*::::::::::::::::::::::::::::::::::::::::
::::::  Creating Footer Component  :::::::
::::::::::::::::::::::::::::::::::::::::*/

class Footer extends React.Component {
    render() {

        return(
            <div className="footer-container">

                <section className="footer-filler">

                </section>

                <h1 className="anthology__heading">
                    Web Anthology
                </h1>

                <section className="anthology-container">
                    
                    <input 
                    type="range" 
                    id="timeline-range" 
                    name="timeline-range"
                    min="1" 
                    max="5" 
                    defaultValue="1" 
                    onChange={this.handleChange}
                    />

                    <label 
                    for="timeline-range"
                    className="anthology-container__label"
                    >
                        Kudos if you learn my favorite show by virtue of the volume titles
                    </label>

                </section>

            </div>
        )

    }
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting Footer Component  ::::::
::::::::::::::::::::::::::::::::::::::::*/

export default Footer;