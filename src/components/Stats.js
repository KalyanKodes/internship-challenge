import React, { use } from 'react'
import "../styles/stats.css"
import users from '../Assests/Group 1261153597.svg';
import townsAndCities from '../Assests/Group 1261153598.svg'
import questionAndTests from '../Assests/Group 1261153599.svg'


const StatsCard = ({ src, name, number }) => {
    return (
        <div className='stats-card-wrapper'>
            <img src={src} alt="name" />
            <div className='stats-card-right'>
                <p style={{ color: "var(--text-tertiary)" }}>{name}</p>
                <b style={{ color: "var(--text-highlight)", fontSize: "20px" }}>{number}+</b>
            </div>
        </div>
    )
}

export default function Stats() {
    return (
        <div className='stats-hero-wrapper'>
            <StatsCard src={users} name={"Registered Users"} number={"1000"} />
            <StatsCard src={townsAndCities} name={"Towns and Cities"} number={"600"} />
            <StatsCard src={questionAndTests} name={"Questions and test papers"} number={"30,000"} />
        </div>
    )
}
