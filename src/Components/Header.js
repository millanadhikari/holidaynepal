import React,{useState} from 'react'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import './Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo  from '../asset/logo.png'

function Header() {
    const [boom, setboom] = useState(false)

    const changebackground= ()=>{
        if(window.scrollY >=80){
            setboom(true)
        }else{
            setboom(false)
        }
    }

    window.addEventListener('scroll', changebackground)
    return (
        <div className={ boom ? "header active":'header'}>
             <img />
            <div className="search">
                <input className="search_input"placeholder="where are we going??">

                </input>
                <LocationSearchingIcon/>
            </div>
            <div>
                <LanguageIcon/><ArrowDropDownIcon/>
            </div>
            
            
        </div>
    )
}

export default Header
