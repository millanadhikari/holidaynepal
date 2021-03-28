import './Signup.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




function Signup({openModal,selected}) {
  


    // const {handlechange, values, errors} =Useform( 
    //     submitForm,
    //     Validateinfo
    //     );
    return (
        <div className="signup">
           
                     
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
                    <button className="login_button" type="submit">Sign Up</button>
                   
                   

                   
                </form>
        </div>
    )
}

export default Signup;
