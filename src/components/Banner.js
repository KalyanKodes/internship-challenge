import React from 'react'
import "../styles/banner.css";
import circle from '../Assests/banner-circle.png';
import objects from '../Assests/OBJECTS.png'

export default function Banner() {
    return (

        <div className='hero-banner'>

            <div className="hero-banner-image-wrapper">
                <img src={circle} alt="circle" className='banner-circle' />
                <img src={objects} alt="banner-image" className='banner-object' />
            </div>

            <div className='hero-banner-details-wrapper'>
                <h3 className='hero-banner-details-heading'>EXPERT INSTRUCTION</h3>
                <h1 className='hero-banner-details-title'>Build Skills With Experts Any Time, <span>Any Where</span></h1>
                <p className='hero-banner-details-description'>We invest in personnel, technological innovations and infrastructure and have established regional and international offices.</p>
            </div>

        </div>
    )
}
