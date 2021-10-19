/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import React from 'react';
import './Footer.css';
import anthology from './resources/subcomponent/Anthology';



/*::::::::::::::::::::::::::::::::::::::::
::::::  Creating Footer Component  :::::::
::::::::::::::::::::::::::::::::::::::::*/

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '1'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        let anthologyPage;

        switch (this.state.value) {
            case '1':
                anthologyPage = anthology.pageOne;
                break;
            case '2':
                anthologyPage = anthology.pageTwo;
                break;
            case '3':
                anthologyPage = anthology.pageThree;
                break;
            case '4':
                anthologyPage = anthology.pageFour;
                break;
            case '5':
                anthologyPage = anthology.pageFive;
                break;
            default:
                break;
        }

        return(
            <div className="footer-container">

                <section className="footer-filler">

                </section>

                <h1 className="anthology__heading">
                    Web Anthology
                </h1>

                <section className="anthology-range-container">
                    
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
                        Kudos if you learn my favorite show by virtue of the volume titles<br/>
                        {this.state.value} / 5
                    </label>

                </section>

                <section className="anthology-container">

                    {anthologyPage}

                </section>

            </div>
        )

    }
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting Footer Component  ::::::
::::::::::::::::::::::::::::::::::::::::*/

export default Footer;