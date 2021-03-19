import React from 'react'
import './FirstCard.css'

function FirstCard({place, time, img}) {
    return (
        <div className="firstcard">
              <img 
                    src={img}
                    alt=""
                    />
                <div className="nearbyplace__contents">
                    <span>{place}</span>
                    <p>{time}</p>
                </div>
        </div>
    )
}

export default FirstCard
