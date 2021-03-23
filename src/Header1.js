import React from 'react'
import './Header1.css'
import logo from '../src/asset/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Header1() {
    return (
        <div className="header1">
            <div className="header__left">
            {/* <img
                className="header__icon"
                src={logo}
                alt=""
            /> */}

            </div>
            <div className="header__center">
                <input type="text" placeholder="Start your search"></input>
                <SearchIcon className="header__centerSearchIcon" />

            </div>
            <div className="header__right">
            {/* <LanguageIcon className="header__rightLanguage" />
            <ExpandMoreIcon/> */}

            </div>
            
        </div>
    )
}

export default Header1
