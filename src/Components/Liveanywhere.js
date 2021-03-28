import React from 'react'
import LiveanyCard from './LiveanyCard'
import{liveanywheredata} from '../data/nearbyplacesdata'
import './Liveanywhere.css'

function Liveanywhere() {
    return (
        <div className="liveanywhere">
            <h3>Live Anywhere</h3>
            <div className="liveanywhere__cards">
            {liveanywheredata.map(index =>(
                    <LiveanyCard key={index}
                    image={index.image}
                    stay={index.stay}/>
                ))}
               

            </div>
            
        </div>
    )
}

export default Liveanywhere
