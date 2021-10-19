/*::::::::::::::::::::::::::::::::::::::::
::::::  Storing Anthology Sections  ::::::
::::::::::::::::::::::::::::::::::::::::*/

const anthology = {
    pageOne: (
        <section className="anthology-page">
            <h1 className="anthology-page__heading">
                Prologue
            </h1>

            <p className="anthology-page__text">
                My name is Hamza Foy, a junior web designer and developer with a growing list
                of projects and websites to my name. I have gotten to that point in my burgeoning career
                where I need a portfolio site to demonstrate my skillset as well as tell my story
                whether to prospective employer, potential client, or curious reader. Much obliged for gracing
                my web anthology and enjoy!
            </p>
        </section>
    ),
    pageTwo: (
        <section className="anthology-page">
            <h1 className="anthology-page__heading">
                Volume I: The things I will do, what they are yet, I know not. . .
            </h1>

            <p className="anthology-page__text">
                In the beginning, there was light on the screen and code written on it.
                First, I learned HTML - that structure rendered in my browser.
                Then, I learned CSS - the rendered code in my browser filled with color and style.
                I began to learn through the Treehouse platform and enrolled in Code Louisville.
            </p>
        </section>
    ),
    pageThree: (
        <section className="anthology-page">
            <h1 className="anthology-page__heading">
                Volume II: It doesn't look like anything to me. . .
            </h1>

            <p className="anthology-page__text">
                As I explored HTML and CSS, in the hopes of designing visually pleasing websites,
                I came to realize that the structure and the style did not interact or move.
                I set out to learn JavaScript and loved the simple syntax and the logic it encouraged.
                Code Louisville accepted me into their program and I completed my Front End Development cohort.
            </p>
        </section>
    ),
    pageFour: (
        <section className="anthology-page">
            <h1 className="anthology-page__heading">
                Volume III: Everything in this world is magic, except to the magician. . .
            </h1>

            <p className="anthology-page__text">
                I began to learn more about the JavaScript programming language including, but not
                limited to, frameworks such as ExpressJS and libraries including React.
                Although my strength is in the frontend, I take great interest in the backend
                leveraging Node.js and learning about ORMs and NoSQL databases such as MongoDB.
            </p>
        </section>
    ),
    pageFive: (
        <section className="anthology-page">
            <h1 className="anthology-page__heading">
                Volume IV: Folly of my kind, there's always a yearning for more. . .
            </h1>

            <p className="anthology-page__text">
                I am systematically pursuing my learning in frontend and backend development.
                I have already developed, from scratch, a number of websites for small businesses in my local community
                and deployed a few apps. I am continuing my education through the Treehouse, Pluralsight, and
                Codecademy platforms. I am currently enrolled in Code Louisville.
            </p>
        </section>
    )
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting Anthology Pages  :::::::
::::::::::::::::::::::::::::::::::::::::*/

export default anthology;