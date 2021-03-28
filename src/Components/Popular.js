import React from 'react'
import './Popular.css'

function Popular({image1,image2, image3, text, day}) {
    return (
        <div className='popular'>
            <div className="popular__img">
                <div  className="popular__mainimg"style={{backgroundImage:`url(${image1})`}}>

                </div>
                <div className="popular__sideimg" >
                    <div style={{backgroundImage:`url(${image2})`}}></div>
                    <div style={{backgroundImage:`url(${image3})`}}></div>

                </div>

            </div>
            <div>
                <h4>{text}</h4>
                <p>{day}</p>

            </div>
            
        </div>
    )
}

export default Popular
