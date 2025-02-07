import React from 'react';
import "../styles/footer.css";
import logo from '../Assests/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <div className='footer-head-wrapper'>
                <h4>Add Valuable Feedback</h4>
                <b>Add Feedback</b>
            </div>
            <div className="footer-top-wrapper">
                <div className="footer-top-left-wrapper">
                    <div className="footer-logo-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                    <h3>About CS Buzz</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique alias quisquam voluptas et tenetur adipisci at quae, accusamus dignissimos quis hic neque vel ea officia assumenda ducimus blanditiis iste possimus?</p>
                </div>
                <div className="footer-top-right-wrapper">
                    <div className="footer-company-wrapper">
                        <b style={{ color: "var(--bg-primary)" }}>Company</b>
                        <p>About</p>
                        <p>Features</p>
                        <p>Work</p>
                        <p>Carear</p>
                    </div>
                    <div className="footer-help-wrapper">
                        <b style={{ color: "var(--bg-primary)" }}>Help</b>
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="footer-resourses-wrapper">
                        <b style={{ color: "var(--bg-primary)" }}>Resourses</b>
                        <p>Free eBooks</p>
                        <p>Development Tutorial</p>
                        <p>How-to-Blog</p>
                        <p>YouTube playlists</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bootom-wrapper">
                <p>Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                <div className="footer-icons-wrapper">
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
        </>
    )
}
