import React from 'react'
import './Joinhostcard.css'


function Joinhostcard({image, text}) {
    return (
        <div className='joinhostcard'>
            <div className="joinhostcard__here" style={{backgroundImage:`url(${image})`}}>
            </div>
            <div>{text}</div>
            
        </div>
    )
}

export default Joinhostcard
