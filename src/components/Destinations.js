import React,{useState} from 'react'
import Advanture from './Advanture'
import Artandculture from './Artandculture'
import './Destination.css'
import Mountains from './Mountains'
import Popular from './Popular'


function Destinations() {
 const [active, setActive] = useState('first')
 

    return (
        <div className="destination">
           
            <h3>Destination Inspirations</h3>
            <div  className="destination__top">
                <div  className={active=== 'first' && 'top_top'} onClick={()=>setActive('first')}><>Destionations for Arts & Culture</></div>
                <div  className={active=== 'second' && 'top_top'}   onClick={()=>setActive('second')}>Destinations for outfoor advanture</div>
                <div  className={active=== 'third' && 'top_top'}  onClick={()=>setActive('third')}>Mountain Cabins</div>
                <div className={active=== 'fourth' && 'top_top'}  onClick={()=>setActive('fourth')}>Popular Destinations</div>
            </div>
            <div>
                {active === 'first' && <Artandculture/> }
                {active === 'second' && <Advanture/> }
                {active === 'third' && <Mountains/> }
                {active === 'fourth' && <Popular/> }




            </div>
            
           
            
        </div>
    )
}

export default Destinations
