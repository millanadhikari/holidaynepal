import React from 'react'
import './Nearbyplaces.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Nearbyplace({place, time, image}) {
    return (
        <div className="nearbyplace">
            <div style ={{backgroundImage:`url(${image})`}}className="nearbyplace__image">

            </div>
            <div className="place__detail">
                <p className="place">{place}</p>
                <p className="hours"><LocationOnIcon/>{time}</p>
            </div>

            
        </div>
    )
}

export default Nearbyplace
