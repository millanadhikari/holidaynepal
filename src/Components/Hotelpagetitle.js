import React from 'react'
import './Hotelpagetitle.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';


function Hotelpagetitle() {
    return (
        <div className="hotelpage_title">
                <div className="title_search">
                     <div><ChevronLeftIcon/></div> <div>Search by Location</div> 
                </div>
                <div><FilterListRoundedIcon/></div>
               

            </div>
    )
}

export default Hotelpagetitle
