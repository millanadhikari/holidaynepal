import React from 'react'
import './Signin.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





function Signin({openModal,selected}) {
   
  




    
    return (
        <div className="signin">
            
                     
                <form 
                 className="formfields">
                    
                    <div className="formfield">
                        <label className="formfield__label">
                           <div> <p className="small">Country/Region</p>
                            <p>{selected}</p> </div> <ExpandMoreIcon  onClick={openModal} />
                            
                        </label>
                        <input 
                            type ="number" 
                            className="formfield__input" 
                            placeholder="Enter your Mobile Number"
                             name="mobile"
                             />
                    </div>
                    <button className="login_button" type="submit">Log-In</button>
                   
                   

                   
                </form>
               
                </div>
               
        
    )
};

export default Signin;
