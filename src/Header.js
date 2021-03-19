import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';// import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Modal from 'react-modal'
import { LaptopWindows } from '@material-ui/icons';
import logo from '../src/asset/logo.png'


const customStyles = {
    content: {
        position: 'absolute',
        top: '90px',
        left: '77%',
        height: '230px',
        maxHeight: '100%',
        width: '300px',
        overflow: 'hidden',
        padding: 'none',
        borderRadius: '15px',
        zIndex: '-1'



    }
};



function Header() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [activeState, setActivestate] = useState(modalIsOpen)
    const [header, setHeader] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        return (
            <Modal

                style={customStyles}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
            >
                <div className="Modaltop__menu">
                    <strong>Sign Up</strong>
                    <p>Login</p>
                </div>
                <div className="Modaltop__submenu">
                    <p>Host your home experience</p>
                    <p>Host your hotel or home</p>
                    <p>Help</p>

                </div>
            </Modal>
        );
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={header ? "header active" : 'header'}>
            {/* <Link to='/'> */}

            <img
                className="header__icon"
                src={logo}
                alt=""
            />
            {/* </Link> */}
            <div className="header__center">
                <input type="text" placeholder="Start your search"></input>
                <SearchIcon className="header__centerSearchIcon" />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <div className="header__rightLang">
                    <LanguageIcon className="header__rightLanguage" />
                    <ExpandMoreIcon />
                </div>

                <div

                    className={modalIsOpen ? 'header__rightMenuActive' : 'header__rightMenu'} onClick={() => setIsOpen(!modalIsOpen)}>
                    <MenuIcon fontSize='small' />
                    <AccountCircleIcon className={"header__rightMenuIcon"} fontSize='large' />
                </div>
                {/* <Modal
                    style={customStyles}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                >
                    <div className="Modaltop__menu">
                    <strong>Sign Up</strong>
                    <p>Login</p>
                    </div>
                    <div className="Modaltop__submenu">
                        <p>Host your home experience</p>
                        <p>Host your hotel or home</p>
                        <p>Help</p>

                    </div>
                   
        </Modal> */}
            </div>
            {openModal()}


        </div>
    )
}

export default Header
