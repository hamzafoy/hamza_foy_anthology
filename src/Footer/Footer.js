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

                <section className="footer">
                    
                    <h1 className="footer__heading">
                        This is a temporary footer section to test font choices.
                    </h1>

                    <p className="footer__text">
                        This is also to test <code>react-parallax</code>.
                    </p>

                </section>

            </div>
        )

    }
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting Footer Component  ::::::
::::::::::::::::::::::::::::::::::::::::*/

export default Footer;