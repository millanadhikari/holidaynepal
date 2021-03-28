import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Mybooking from './Pages/Mybooking';
import Myfavourite from './Pages/Myfavourite';
import Myprofile from './Pages/Myprofile';
import Mainmenu from './Components/Mainmenu';
import {useStateValue} from './Config/StateProvider';





function App() {

  const [{user}, dispatch] =useStateValue();


  return (
    
    <div className="App">
      {!user ? ( <Router>
       
       <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/myfavourite' exact component ={Myfavourite}/>
        <Route path= '/Mybooking' exact component={Mybooking}/>
        <Route path= '/myprofile' exact component={Myprofile}/>
        <Route path ='/signin' exact component={Myprofile}/>

      </Switch>
      <Mainmenu/>
     
    
      
                  
                 
     
   
   

   
  
  
      </Router>):( <Router>
       
       <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/myfavourite' exact component ={Myfavourite}/>
        <Route path= '/Mybooking' exact component={Mybooking}/>
        <Route path= '/myprofile' exact component={Myprofile}/>
        <Route path ='/signin' exact component={Myprofile}/>

      </Switch>
      <Mainmenu/>
     
    
      
                  
                 
     
   
   

   
  
  
      </Router>)}
      
      
        
                    
                   
       
     
     

     
    
    
        
  </div>
    
  );
}

export default App;
