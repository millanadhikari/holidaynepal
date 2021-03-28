import React from 'react'
import './Hotelslodges.css'
import Hotelpagetitle from '../Components/Hotelpagetitle'
import HotelsCard from '../Components/HotelsCard';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import { KathmanduHotelsdata } from '../data/nearbyplacesdata';







function Hotelslodges() {
    return (
        <div className="hotel">
            <Hotelpagetitle/>
            <div className="hotelpage__content">
                <div style={{color:'gray'}}>100+ stays</div>
                 <div><h2>Hotels and Lodges</h2></div>
                 <div className="hotel__places"><div style={{fontWeight:'bold'}}>Kathmandu</div><div><KeyboardArrowRightRoundedIcon/></div></div>

                 <div className="hotels_lists">
                 {KathmanduHotelsdata.map(index =>(
                    <HotelsCard key={index}
                    image1={index.image1}
                    rating={index.rating}
                    hotel={index.hotelname}
                    location={index.location}
                    area={index.area}
                    price={index.price}
                    />
                    ))}
                     

                 </div>

            </div>
            
        </div>
    )
}

export default Hotelslodges
