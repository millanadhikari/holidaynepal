import React from 'react'
import './Joinhost.css'
import Joinhostcard from './Joinhostcard'

function Joinhost() {
    return (
        <div className='joinhost'>
            <h3>Join Millions of hosts on HolidayNepal</h3>
            <div className='joinhost__cards'>
                <Joinhostcard 
                image="https://s26561.pcdn.co/wp-content/uploads/2018/09/Rice-Terrace-Swing-in-Bali-Indonesia.jpg"
                text='The Swing experience Nepal'/>
                 <Joinhostcard 
                 image="https://www.satoriadventuresnepal.com/pagegallery/bungee-jumping10.jpg"
                 text='The Bunjee Jump , Ready??'/>
                 <Joinhostcard 
                 image="https://www.wallpapertip.com/wmimgs/100-1001468_village-annapurna-conservation-area-nepal-hd-wallpaper-bandipur.jpg"
                 text='The Scenerio experience'/>


            </div>

            
        </div>
    )
}

export default Joinhost
