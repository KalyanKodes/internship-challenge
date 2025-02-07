import React from 'react'
import html from "../Assests/html.png"
import css from "../Assests/css.png"
import js from "../Assests/js.png"
import python from "../Assests/python.png"
import react from "../Assests/react.png"

const Card = ({ src, name }) => {
    return (
        <div className='trending-technology-card'>
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    )
}


export default function Trending() {
    return (
        <div className='hero-trending-technology-wrapper'>
            <h2>Trending <span>Technology</span></h2>
            <Card src={html} name="HTML" />
            <Card src={css} name="CSS" />
            <Card src={js} name="JavaScript" />
            <Card src={python} name="Python" />
            <Card src={react} name="React" />
        </div>
    )
}
