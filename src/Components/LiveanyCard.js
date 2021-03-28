import React from 'react'
import './LiveanyCard.css'

function LiveanyCard({image, stay}) {
    return (
        <div className="liveanycard">
            <div style={{backgroundImage:`url(${image})`}} className="card"></div>
            <div>{stay}</div>
            
        </div>
    )
}

export default LiveanyCard
