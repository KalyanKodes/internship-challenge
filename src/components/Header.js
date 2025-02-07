import React, { useState } from 'react'
import "../styles/header.css"
import logo from '../Assests/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faClose, } from '@fortawesome/free-solid-svg-icons';
import login from "../Assests/login.svg"
import Nav from './Nav';
import Banner from './Banner';
import Trending from './Trending';


export default function Header() {
    const [show, setShow] = useState(false)
    return (
        <div className="hero-1">
            <header className='hero-1-header'>
                <div className="header-top-logo-wrapper">
                    <img src={logo} alt="logo" />
                </div>
                <div className="header-top-search-wrapper">
                    <input type="text" placeholder='search here' />
                    <FontAwesomeIcon icon={faSearch} className='search-icon' />
                </div>



                <div className={`header-links-wrapper side-bar ${show ? "open" : "close"}`}>

                    <div className="side-bar-close-icon-wrapper" onClick={() => { setShow(!show) }}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>

                    <div className="side-bar-profile-wrapper">
                        <div className="side-bar-profile-image-wrapper">

                        </div>
                        <div className="side-bar-profile-details">
                            <b>Login/Signup</b>
                            <p>Login or signup to continue on profile</p>
                        </div>
                    </div>
                    <div className="side-bar-links">
                        <a href="#home" onClick={() => { setShow(false) }}>Home</a>
                        <a href="#olympaid" onClick={() => { setShow(false) }}>Olympaid</a>
                        <a href="#cdse" onClick={() => { setShow(false) }}>CBSE</a>
                        <a href="#cuet" onClick={() => { setShow(false) }}>CUET</a>
                    </div>
                    <div className="side-bar-login-button-wrapper">
                        <button className='login-button'>
                            <p>
                                Login
                            </p>
                            <img src={login} alt="login" style={{ transform: "translateY(5px)" }} />

                        </button>
                    </div>
                </div>
                <FontAwesomeIcon icon={faBars} className='hamburger-icon' onClick={() => setShow(true)} style={{ cursor: "pointer" }} />
            </header >

            <div className="hero-1-banner">
                <Nav />
                <Banner />
                <Trending />
            </div>
        </div >
    )
}
