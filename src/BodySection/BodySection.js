/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './BodySection.css';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating Body Component  ::::::::
::::::::::::::::::::::::::::::::::::::::*/

class BodySection extends React.Component {
    render() {

        return(
            <div className="body-section-container">

                <div className="body__layered-step-divider layered-step-white-bottom">
                
                </div>

                <section className="body">

                    <h1 className="project-list__label">
                        Completed Projects
                    </h1>
                    
                    <aside className="project-list__item">

                        <h1 className="item__label">
                            Kebab on Wheels
                        </h1>

                        <p className="item__text">
                            I developed this website for food truck owner Abdullah Mahmoud. I utilize 
                            Surge.sh SSG to push updates requested by client in a swift fashion.
                        </p>

                    </aside>

                </section>

                <div className="body__layered-step-divider layered-step-white-top">
                
                </div>

            </div>
        )

    }
}



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Exporting Body Component  :::::::
::::::::::::::::::::::::::::::::::::::::*/

export default BodySection;