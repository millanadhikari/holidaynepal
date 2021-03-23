import React from 'react'
import './Home.css'
import Header from './Header'
import Header1 from './Header1'

function Home() {
    return (
        <div className="home">
            <div className="home__img">
                <Header/>
                <Header1/>
                <div className="home__title">
                <p>Go</p>
                <p>Near</p>
                </div>
                <button>Explore nearby stays</button>
          

            </div>
            
            
        </div>
    )
}

export default Home
