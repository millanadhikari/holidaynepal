import React from 'react'
import './HotelsCard.css'
import PinDropRoundedIcon from '@material-ui/icons/PinDropRounded';


function HotelsCard(props) {
    return (
        <div className="hotelcards">

            <div style={{backgroundImage:`url(${props.image1})`}} className="hotel__images">

            </div>
            <div className="hotel__details">
                <div>{props.rating}</div>
                <div>{props.hotel}</div>
                <div><PinDropRoundedIcon/>{props.location}.{props.area}</div>
                <div>Rupaiya {props.price}/ night</div>
            </div>
            
        </div>
    )
}

export default HotelsCard
