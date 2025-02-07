import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';

const items = [
    <p className="carousel-item">Trending Now</p>,
    <p className="carousel-item">HTML</p>,
    <p className="carousel-item">CSS</p>,
    <p className="carousel-item">JavaScript</p>,
    <p className="carousel-item">Python</p>,
    <p className="carousel-item">Bootstrap</p>,
    <p className="carousel-item">Java</p>,
    <p className="carousel-item">C</p>,
    <p className="carousel-item">C++</p>,
    <p className="carousel-item">React Js</p>,
    <p className="carousel-item">Node Js</p>,
    <p className="carousel-item">Web Development</p>,
    <p className="carousel-item">Practice Problems</p>,
    <p className="carousel-item">Test</p>,
];

const Nav = () => {

    const slider = useRef();

    const scrollLeft = () => {
        slider.current.scrollLeft -= 100
    }
    const scrollRight = () => {
        slider.current.scrollLeft += 100
    }
    return (
        <nav className="nav-container">
            <FontAwesomeIcon icon={faAngleLeft} className='nav-button' onClick={scrollLeft} />
            <div className='nav-links-wrapper' ref={slider}>
                {
                    items
                }
            </div>
            <FontAwesomeIcon icon={faAngleRight} className='nav-button' onClick={scrollRight} />
        </nav>
    );
};

export default Nav;
