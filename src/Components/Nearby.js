import React from 'react'
import './Nearby.css'
import Nearbyplace from './Nearbyplace'
import ExploreIcon from '@material-ui/icons/Explore';
import {nearbyplacesdata} from '../data/nearbyplacesdata'

function Nearby() {
    return (
        <div className="nearby">
            <h3>Explore Nearby Places <ExploreIcon/></h3>
            <div className="nearby__places">

                {nearbyplacesdata.map(index =>(
                    <Nearbyplace key={index}
                    image={index.img}
                    place={index.place}
                    time={index.time}/>
                ))}
               

            </div>
            
        </div>
    )
}

export default Nearby
