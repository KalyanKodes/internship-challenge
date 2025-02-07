import React, { useState } from 'react'
import "../styles/features.css"
import cap from '../Assests/cap.png';
import fImage from '../Assests/features.png'

const Head = () => {
    return (
        <div className="head-wrapper">

            <h1 className='hero-banner-details-title'><span>Features</span></h1>
            <p>We invest in personnel, technological innovations and infrastructure and have established regional and international offices.</p>

        </div>

    )
}



const FeatureCard = ({ name, active }) => {
    const [show, setShow] = useState(false)
    return (
        <div className={`feature-card-wrapper ${show ? "active" : ""}`} onClick={() => { setShow(!show) }}>
            <div style={{ display: "flex", justifyContent: 'start', alignItems: "center", gap: "10px" }}>
                <img src={cap} alt="cap" style={{ display: 'inline-block', width: '30px', height: '30px' }} />
                <b style={{ display: 'inline-block', fontSize: "20px" }}>{name}</b>
            </div>
            {show &&
                <>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, magnam provident! Laboriosam illum sapiente ea laborum sequi. Non voluptatum commodi doloribus, placeat voluptate nobis nesciunt excepturi suscipit ipsa cupiditate quaerat!</p>
                </>
            }
        </div>
    )
}

const Body = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="body-wrapper">
            <div className="features-categories-wrapper">
                <div className={`feature-card-wrapper ${show ? "active" : ""}`} onClick={() => { setShow(!show) }}>
                    <div style={{ display: "flex", justifyContent: 'start', alignItems: "center", gap: "10px" }}>
                        <img src={cap} alt="cap" style={{ display: 'inline-block', width: '30px', height: '30px' }} />
                        <b style={{ display: 'inline-block', fontSize: "20px" }}>{"Study Material"}</b>
                    </div>
                    {show &&
                        <>
                            <br />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, magnam provident! Laboriosam illum sapiente ea laborum sequi. Non voluptatum commodi doloribus, placeat voluptate nobis nesciunt excepturi suscipit ipsa cupiditate quaerat!</p>
                        </>
                    }
                </div>
                <br />
                <br />
                <FeatureCard name={"Question Bank"} />
                <br />
                <br />
                <FeatureCard name={"Test Series"} />
                <br />
                <br />
                <FeatureCard name={"Previous Solved Papers"} />
                <br />
                <br />
                <FeatureCard name={"Leader Board"} />
            </div>
            <div className="features-image">
                <img src={fImage} alt="feautres-image" />
            </div>
        </div>
    )
}

export default function Features() {
    return (
        <div className='features-wrapper'>
            <Head />
            <Body />
        </div>
    )
}
