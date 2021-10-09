/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import ParallaxHeader from './ParallaxHeader/ParallaxHeader'
import BodySection from './BodySection/BodySection'
import './App.css';



/*::::::::::::::::::::::::::::::::::::::::
:::::::::  Crafting App Component  :::::::
::::::::::::::::::::::::::::::::::::::::*/

function App() {

  return (
    
    <div className="App">

      <ParallaxHeader/>
      <BodySection/>
      <BodySection/>
      <BodySection/>

    </div>

  );
  
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default App;