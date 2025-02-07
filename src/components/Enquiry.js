import React from 'react'
import enquiryImage from '../Assests/enquiry-image.png';
import "../styles/enquiry.css"



export default function Enquiry() {
    return (

        <div className='enquiry-wrapper'>

            <div className="enquiry-image-wrapper">
                <img src={enquiryImage} alt={'enquiry-image'} />
            </div>

            <div className="input-wrapper">

                <h3 className='hero-banner-details-heading'>Get in Touch With Us?</h3>
                <br />
                <h2>Call us on our number</h2>
                <b style={{ color: "var(--text-highlight)", fontSize: "20px" }}>+917988315190</b>
                <br />
                <br />

                <form >

                    <div className="input-name-wrapper input-fields-wrapper">
                        <label htmlFor="name">Full Name</label><br />
                        <input type="text" id='name' placeholder='Input Your Name' />
                    </div><br />

                    <div className="input-email-wrapper input-fields-wrapper">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id='name' placeholder='Input Your Email' required />
                    </div><br />

                    <div className="input-message-wrapper input-fields-wrapper">
                        <label htmlFor="message">Message</label><br />
                        <textarea id="message" placeholder='Write Message...'></textarea>
                    </div><br />

                    <div className="submit-wrapper">
                        <button>Enquiry</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
