import React from 'react'
import Header from './Header'
import './Home.css'
import Liveanywhere from './Liveanywhere'
import Nearby from './Nearby'

function Home() {
    return (
        <div className="home">
            <div className="header__container">
               
                <Header/>
               


            </div>
            <Nearby/>
            <Liveanywhere/>
           

        </div>
    )
}

export default Home
