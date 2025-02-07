import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../styles/testimonial.css"
import student1 from '../Assests/student-1.png'
import student2 from '../Assests/student-2.png'
import student3 from '../Assests/student-3.png'
import bg1 from '../Assests/testimonial-bg.png'



const TestimonialCard = ({ studentSrc, studentName, studentDesignation }) => {
    return (
        <div className="testimonial-card-wrapper active ">
            <img src={bg1} className='active-image' />
            <img src={studentSrc} className='move-top' />
            <b style={{ fontSize: "1.2em" }} className='move-top name'>{studentName}</b>
            <p style={{ fontSize: "1em" }} className='move-top designation'>{studentDesignation}</p>
            <div className="quotes-wrapper move-top">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25593 7.55002C4.51607 7.55162 3.7892 7.74453 3.14593 8.11002C4.05172 5.76698 5.55068 3.69945 7.49593 2.11002C7.61768 2.02226 7.72019 1.91051 7.79714 1.78165C7.87409 1.65278 7.92386 1.50954 7.94337 1.36073C7.96289 1.21191 7.95175 1.06068 7.91063 0.916331C7.86952 0.771984 7.7993 0.637579 7.70429 0.521387C7.60929 0.405194 7.49151 0.309673 7.35821 0.240701C7.22491 0.17173 7.0789 0.130769 6.92917 0.120336C6.77945 0.109904 6.62917 0.130222 6.48759 0.180041C6.34601 0.22986 6.21613 0.308125 6.10593 0.41002C2.10593 3.66002 0.325928 8.16002 0.325928 10.95C0.330666 11.9253 0.616072 12.8787 1.14805 13.6962C1.68003 14.5136 2.4361 15.1607 3.32593 15.56C3.92714 15.8524 4.58741 16.0029 5.25593 16C5.82939 16.0279 6.40254 15.939 6.94062 15.7388C7.4787 15.5385 7.97051 15.2311 8.38623 14.8351C8.80194 14.4391 9.1329 13.9628 9.35904 13.435C9.58518 12.9073 9.70178 12.3392 9.70178 11.765C9.70178 11.1909 9.58518 10.6227 9.35904 10.095C9.1329 9.56727 8.80194 9.09097 8.38623 8.69497C7.97051 8.29897 7.4787 7.99153 6.94062 7.79128C6.40254 7.59103 5.82939 7.50215 5.25593 7.53002V7.55002Z" fill="#FBC108" />
                </svg>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25593 7.55002C4.51607 7.55162 3.7892 7.74453 3.14593 8.11002C4.05172 5.76698 5.55068 3.69945 7.49593 2.11002C7.61768 2.02226 7.72019 1.91051 7.79714 1.78165C7.87409 1.65278 7.92386 1.50954 7.94337 1.36073C7.96289 1.21191 7.95175 1.06068 7.91063 0.916331C7.86952 0.771984 7.7993 0.637579 7.70429 0.521387C7.60929 0.405194 7.49151 0.309673 7.35821 0.240701C7.22491 0.17173 7.0789 0.130769 6.92917 0.120336C6.77945 0.109904 6.62917 0.130222 6.48759 0.180041C6.34601 0.22986 6.21613 0.308125 6.10593 0.41002C2.10593 3.66002 0.325928 8.16002 0.325928 10.95C0.330666 11.9253 0.616072 12.8787 1.14805 13.6962C1.68003 14.5136 2.4361 15.1607 3.32593 15.56C3.92714 15.8524 4.58741 16.0029 5.25593 16C5.82939 16.0279 6.40254 15.939 6.94062 15.7388C7.4787 15.5385 7.97051 15.2311 8.38623 14.8351C8.80194 14.4391 9.1329 13.9628 9.35904 13.435C9.58518 12.9073 9.70178 12.3392 9.70178 11.765C9.70178 11.1909 9.58518 10.6227 9.35904 10.095C9.1329 9.56727 8.80194 9.09097 8.38623 8.69497C7.97051 8.29897 7.4787 7.99153 6.94062 7.79128C6.40254 7.59103 5.82939 7.50215 5.25593 7.53002V7.55002Z" fill="#FBC108" />
                </svg>
            </div>
            <p className='move-top description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
        </div>
    )
}


const handleDragStart = (e) => e.preventDefault();

const items = [
    <TestimonialCard studentSrc={student1} studentDesignation="Lead Designer" />,
    <TestimonialCard studentSrc={student2} studentDesignation="Software Engineer" />,
    <TestimonialCard studentSrc={student3} studentDesignation="Product Manager" />,
    <TestimonialCard studentSrc={student1} studentDesignation="UI/UX Designer" />,
    <TestimonialCard studentSrc={student2} studentDesignation="Data Analyst" />
];



const responsive = {
    0: {
        items: 1,
    },
    700: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain',
    },
    1400: {
        items: 4
    }
}


export default function Testimonial() {
    return (
        <div className='testimonial-wrapper'>
            <div className="testimonial-heading-wrapper">
                <h1>What Our Students Say</h1>
            </div>

            <AliceCarousel
                autoPlay={true}
                infinite
                autoPlayInterval={1000}
                mouseTracking
                items={items}
                responsive={responsive}
                disableButtonsControls
            />
        </div>
    )
}
