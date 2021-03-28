import React from 'react'
import Popular from '../Components/Popular'
import './Myfavourite.css'
import {popularplacedata} from '../data/nearbyplacesdata'
import {Link} from 'react-router-dom';
import {useStateValue} from '../Config/StateProvider'



function Myfavourite() {

    const[{user}, dispatch]= useStateValue();

    return (
        <div className="favourites">{user ? ( <div className="popular__cards">
        {popularplacedata.map(index =>(
        <Popular key={index}
            image1={index.image1}
           image2={index.image2}
           image3={index.image3}
           text={index.text}
            day={index.day}/>
           ))}
  
</div>) : ( <div className="myfavourite">
         <div>
            <h3>My favourite</h3>
            <Link to ='./myprofile' className="login_but">Login</Link>
            <h3>Popular Stay</h3>

         </div>
                   
         <div className="popular__cards">
                     {popularplacedata.map(index =>(
                     <Popular key={index}
                         image1={index.image1}
                        image2={index.image2}
                        image3={index.image3}
                        text={index.text}
                         day={index.day}/>
                        ))}
               
         </div>
               

           
            
        </div>)}
        
        </div>
    )
}

export default Myfavourite
