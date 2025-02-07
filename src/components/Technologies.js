import React from 'react'
import "../styles/technologies.css"
import java from '../Assests/java.png'
import php from '../Assests/php.png'
import bs from '../Assests/bootStrap.png'
import html from '../Assests/html.png'
import css from '../Assests/css.png'
import js from '../Assests/js.png'


const TechCard = ({ src, name, description, number }) => {
    return (
        <div className="tech-card-wrapper">
            <div className={`tech-image-wrapper tech-image-wrapper-${number}`}>
                <img src={src} alt={name} />
            </div>
            <div className="tech-details-wrapper">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}



export default function Technologies() {
    return (
        <div className='technologies-wrapper'>
            <TechCard
                src={html}
                name={"HTML"}
                description={"Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance."}
                number={1}
            />
            <TechCard
                src={css}
                name={"CSS"}
                description={"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML, or XHTML)."}
                number={2}
            />
            <TechCard
                src={js}
                name={"JavaScript"}
                description={"JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions."}
                number={3}
            />
            <TechCard
                src={java}
                name={"Java"}
                description={"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."}
                number={4}
            />
            <TechCard
                src={bs}
                name={"Bootstrap"}
                description={"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."}
                number={5}
            />
            <TechCard
                src={php}
                name={"PHP"}
                description={"PHP is a recursive acronym for 'PHP: Hypertext Preprocessor'. PHP is a server-side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites."}
                number={6}
            />
        </div>

    )
}
