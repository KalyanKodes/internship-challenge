import React from 'react'
import "../styles/faq.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Question = ({ question, answer, opened }) => {
    const [isOpened, setIsOpened] = useState(opened)
    return (
        <div className="question-card" onClick={() => { setIsOpened(!isOpened) }}>
            <div className="question"  >
                <b>{question}</b>
                <div className="toggle-icon-wrapper">
                    {
                        isOpened ?
                            <FontAwesomeIcon icon={faMinus} className='fa-icon minus' /> :
                            <FontAwesomeIcon icon={faPlus} className='fa-icon plus' />
                    }
                </div>
            </div>
            <div className="answer">
                {isOpened && <p>{answer}</p>}
            </div>
        </div>
    )
}



export default function Faq() {
    return (
        <div className='faq-wrapper'>

            <div className='faq-top-heading-wrapper'>
                <h1 className='hero-banner-details-title faq-title'>Frequently <span>asked </span> questions</h1>
            </div>

            <p>Answers to Your Burning Questions: Unveiling the FAQ Section for Inquisitive Minds</p>

            <div className="questions-card-wrapper">

                <Question question={"Is there a free trial available?"} answer={"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."} opened={false} />

                <Question question={"Can I change my plan later?"} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae ea eos tenetur quidem ut iusto nisi illum, magnam veniam consequuntur maiores deserunt molestias quam labore nostrum quod veritatis quae!"} opened={false} />

                <Question question={"Can other info be added to an invoice?"} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae ea eos tenetur quidem ut iusto nisi illum, magnam veniam consequuntur maiores deserunt molestias quam labore nostrum quod veritatis quae!"} opened={false} />

                <Question question={"How does billing work?"} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae ea eos tenetur quidem ut iusto nisi illum, magnam veniam consequuntur maiores deserunt molestias quam labore nostrum quod veritatis quae!"} opened={false} />

                <Question question={"How do I change my account email?"} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae ea eos tenetur quidem ut iusto nisi illum, magnam veniam consequuntur maiores deserunt molestias quam labore nostrum quod veritatis quae!"} opened={false} />

            </div>

        </div>
    )
}
