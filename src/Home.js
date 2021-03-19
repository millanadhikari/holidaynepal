import React from 'react'
import './Home.css'
import Header from './Header'

function Home() {
    return (
        <div className="home">
            <div className="home__img">
                <Header/>
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
