import React,{useState} from 'react'
import './Myprofile.css'
import Signin from './Signin'
import Signup from './Signup';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {useStateValue} from '../Config/StateProvider';
import { facebookProvider, googleProvider} from '../Config/authMethod'
import socialMediaAuth from '../Config/auth';
import { actionTypes } from '../Config/reducer';
import Profiledetail from './Profiledetail';



const Countries=[
    {
         country:'Australia(+61)'
     },
     {
          country:'Bangladesh (+880)'
     },
     {
         country:'Canada (+1)'
     }
     ,{
         country:'Denmark(+45)'
     }
     ,{
         country:'Egypt (+20)'
     }
    ,
     {
         country: 'France (+33)'
     }
     ,{
         country:'Germany (+49)'
     },
     {
         country:'Hong Kong (+852)'
     }
    ,{
     country:'Nepal (+977)'
    }
     ,{
         country:'India (+91)'
     },
    {
     country:'USA (+1)'
    }
     
 ]

  

function Myprofile() {
    const [{user}, dispatch] =useStateValue();

  

    const [signin, setsignin] = useState(false)
    const [open, setopen] = useState(false)
    const [country, setcountry] = useState('Nepal (+977)')

    function closeModal(){
        setopen(false)
    }
    function openModal(){
        setopen(!open)
    }
    const handleOnClick = async(provider) =>{
       
        const result = await socialMediaAuth( provider);
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user
        })

    }
   
   
    function twik(){
        setsignin(true)

    }
    function twing(){
        setsignin(false)
    }
    return (

               <>
              {user ? (<Profiledetail/>) :( <div className="myprofile" >
                        <div className="pageswitcher">
                         <div>
                             <div onClick={twik} className={ signin ?"pageswitcher__item active":"pageswitcher__item"}>sign in</div>
                             <div  onClick={twing} className={signin ?"pageswitcher__item ":"pageswitcher__item active"}>Signup</div>

                         </div>
               
                        </div>
                        <div className="formtitle">
                        {/* {open? <Modal
                            isOpen={open}
                            onRequestClose={closeModal}
             */}
                            {open? <div
                          className="countries__modal">
               
                         <div onClick={closeModal} className="countries">
                            {Countries.map(index=>(<div key={index}
                            onClick={()=>setcountry(index.country)}
                            >{index.country}</div>))}

                         </div>
                     </div>:null}
               
                        </div>
                         <div className="switch">
            
                         {signin ?<Signin openModal={openModal}
                                           selected={country}
                                    />: <Signup openModal={openModal}
                                            selected={country}/>}  
              
           
                        </div>
                        <div className="logins">
                            <div>OR</div>
                            <div className="logins_buttons"><div className="logins__icons"><MailOutlineIcon/></div> <div>continue with email</div></div>
                            <div className="logins_buttons" onClick={()=>handleOnClick(googleProvider)}><div  className="logins__icons"><MailOutlineIcon/></div> <div>continue with Google</div></div>
                            <div className="logins_buttons" onClick={()=>handleOnClick(facebookProvider)}><div  className="logins__icons"><FacebookIcon/></div> <div>continue with Facebook</div></div>
                            <div className="logins_buttons"> <div  className="logins__icons"><AppleIcon/></div><div>continue with Apple</div></div>
                            <div>{signin ? <p>Don`t have an account? <span style={{color:'#ff455c'}} onClick={twing}>sign Up</span></p>:<p> Already  have an account? <span  style={{color:'#ff455c'}} onClick={twik}>Sign In</span></p>}</div>

                        </div>
              
            </div>)}
            
                  
                   
            
        
       </>
       
       
       
    )
}

export default Myprofile;
