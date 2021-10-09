/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import Header from './Header/Header'
import BodySection from './BodySection/BodySection'
import Footer from './Footer/Footer';
import './App.css';



/*::::::::::::::::::::::::::::::::::::::::
:::::::::  Crafting App Component  :::::::
::::::::::::::::::::::::::::::::::::::::*/

function App() {

  return (
    
    <div className="App">

      <Header/>
      <BodySection/>
      <Footer/>

    </div>

  );
  
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default App;