import React from 'react';
import './NavBar.css';



class NavBar extends React.Component {

    render() {

        return(
            <div className="nav-bar-container">

                <section className="nav-bar__logo">
                    <h1>Testing</h1>
                </section>

                <section className="nav-bar__byline">
                    <h1>Another Test</h1>
                </section>

                <section className="nav-bar__icons">
                    <h1>A Third Test!</h1>
                </section>
            </div>
        )

    }

}



export default NavBar;