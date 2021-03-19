import './App.css';


import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Joinhost from './components/Joinhost';
import Test from './components/test';
import Home from './Home'
import Nearbyplaces from './components/Nearbyplaces'

function App() {
  return (
    <div className="App">


     
    

            {/* <Header /> */}
 <Home/>
      <Nearbyplaces/>
    <Joinhost/>
    
      <Destinations/>
      <Footer/>
      

    </div>
  );
}

export default App;
