import React from 'react'
import './Profiledetail.css'
import {useStateValue} from '../Config/StateProvider'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';



function Profiledetail() {
    const[{user}, dispatch]= useStateValue();
  console.log(user)
 
return (
    <div className='profiledetail'>
        <div className="user__title">
            <div style={{backgroundImage:`url(${user.photoURL})`}} className="user__image">

            </div>
            <div><div>{user.displayName}</div><div className="pinky">Show Profile</div></div>
        </div>
        <div className="account__setting">
            <div  className="titles">ACCOUNT SETTINGS</div>
            <div className="setting__items">
                <div className="smallletters">Personal information</div><div><PersonOutlineOutlinedIcon/></div>
            </div>
            <div className="setting__items">
                <div className="smallletters">Payment options</div><div><CreditCardOutlinedIcon/></div>
            </div>
            <div className="setting__items">
                <div className="smallletters">Notification</div><div><NotificationsNoneOutlinedIcon/></div>
            </div>
            <div className="setting__items">
                <div className="smallletters" >Extra</div><div><ExtensionOutlinedIcon/></div>
            </div>
        </div>
        <div className="account__setting">
            <div className="titles">Support</div>
            <div className="setting__items">
                <div className="smallletters">Contact Support</div><div><MicNoneOutlinedIcon/></div>
            </div>
            <div className="setting__items">
                <div className="smallletters" >Get Help</div><div><HelpOutlineOutlinedIcon/></div>
            </div>
            <div className="setting__items">
                <div className="smallletters" >Give is feedback</div><div><AssignmentOutlinedIcon/></div>
            </div>
           
        </div>
        <div className="logout__button">
            Logout
        </div>
          
    </div>
)

  
}

export default Profiledetail ;
