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

                <section className="end-container">
                    
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