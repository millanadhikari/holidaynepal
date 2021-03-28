import React,{useState} from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PersonIcon from '@material-ui/icons/Person';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import './Mainmenu.css'
import {NavLink} from 'react-router-dom';
import {useStateValue} from '../Config/StateProvider'




function Mainmenu() {
    const[{user}, dispatch]= useStateValue();

    return (
        <>{user? ( <div className='mainmenu'>
        <NavLink activeClassName="menu_link_active" className="mainmenu__link" to ='/'>
            <HomeIcon/>
            <p>Home</p>
        </NavLink>
        <NavLink activeClassName="menu_link_active" className="mainmenu__link" to ='/myfavourite'>
            <FavoriteIcon/>
            <p>My Favoutire</p>
        </NavLink>
        <NavLink activeClassName="menu_link_active" className="mainmenu__link" to ='/mybooking'>
            <BookmarksIcon/>
            <p>My bookings</p>
        </NavLink>
        <NavLink activeClassName="menu_link_active" className="mainmenu__link" to ='/myprofile'>
            <PersonIcon/> 
            <p>My Profile</p>
        </NavLink>
        
    </div>): (
         <div className='mainmenu'>
         <NavLink activeClassName="menu_link_active" className="mainmenu__link" to ='/'>
             <HomeIcon/>
             <p></p>
         </NavLink>
         <NavLink activeClassName="menu_link_active" className="mainmenu__link" to ='/myfavourite'>
             <ExploreOutlinedIcon/>
             <p></p>
         </NavLink>
        
         <NavLink activeClassName="menu_link_active" className="mainmenu__link" to ='/myprofile'>
             <PersonIcon/> 
             <p></p>
         </NavLink>
         
     </div>
    )}
       
        </>
    )
}

export default Mainmenu
