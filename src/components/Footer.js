import React from 'react'
import './Footer.css'
import Footerabout from './Footerabout'
import Footercomun from './Footercomun'
import Footerhost from './Footerhost'
import Footerlogo from './Footerlogo'
import Footersocial from './Footersocial'
import Footersupport from './Footersupport'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <Footerabout/>
                <Footercomun/>
                <Footerhost/>
                <Footersupport/>
            {/* about 
            community
            host
            support */}

            </div>
            <div className="footer__bottom">
                <Footerlogo/>
                <Footersocial/>
                {/* logo description

                socialicons */}
            </div>
            

            
        </div>
    )
}

export default Footer
