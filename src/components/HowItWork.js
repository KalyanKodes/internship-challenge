import React from 'react'
import "../styles/howItWork.css"
import "../styles/topCategories.css"


const Step = ({ stepName, stepDescription, stepNumber }) => {
    return (
        <div className={`step-wrapper step-wrapper-${stepNumber}`}>
            <h2>{stepName}</h2>
            <p>{stepDescription}</p>
            <div className={`step-wrapper-step-counter step-wrapper-step-counter-${stepNumber}`}>{stepNumber}</div>
            <div className={`step-wrapper-horizontal-line step-wrapper-horizontal-line-${stepNumber}`}></div>
            <div className={`step-wrapper-vertical-line step-wrapper-vertical-line-${stepNumber}`}></div>
        </div>
    )
}




export default function HowItWork() {
    return (

        <>

            <div className='how-it-works-wrapper'>
                <div className='how-it-works-top'>
                    <h1 className='hero-banner-details-title'>How it <span>Works</span></h1>
                    <p className='hero-banner-details-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>

                <div className="how-it-works-steps-wrapper-mobile">
                    <Step
                        stepName={"Sign Up:"}
                        stepNumber={1}
                        stepDescription={"Create your account in just a few clicks. Register with CS BUZZ to start your journey into the world of computer science. Just enter your details and you’re ready to go!"}
                    />
                    <Step
                        stepName={"Choose Your Course:"}
                        stepNumber={2}
                        stepDescription={"Browse through our extensive catalog of computer science courses. Whether you’re interested in learning the basics of programming, data science, or diving deep into artificial intelligence, we have something for every level of expertise."}
                    />
                    <Step
                        stepName={"Personalize Your Learning Experience:"}
                        stepNumber={3}
                        stepDescription={"Set your learning goals and preferences. Our adaptive learning system will suggest the most effective path for you, adjusting to your pace and style. You can also choose to focus on specific topics or projects that interest you the most."}
                    />
                    <Step
                        stepName={"Engage with Interactive Content:"}
                        stepNumber={4}
                        stepDescription={"Start learning through interactive lessons that make complex concepts easy to understand. Engage with video tutorials, practical coding exercises, and quizzes that ensure you grasp and retain knowledge effectively."}
                    />
                    <Step
                        stepName={"Apply Your Skills:"}
                        stepNumber={5}
                        stepDescription={"Put your skills to the test with hands-on projects and coding challenges. Build your software, apps, or algorithms with the guidance of our expert mentors and share your projects with peers for collaborative learning and feedback."}
                    />
                    <Step
                        stepName={"Track Your Progress:"}
                        stepNumber={6}
                        stepDescription={"Monitor your learning progress with our built-in tracking tools. See how much you’ve achieved and what’s left to master. Adjust your learning plan at any time to focus on areas that need more attention."}
                    />

                </div>

            </div>
            <div className="how-it-works-steps-wrapper how-it-works-steps-wrapper-desktop">
                <div className="how-it-works-steps-top-wrapper">
                    <Step
                        stepName={"Sign Up:"}
                        stepNumber={1}
                        stepDescription={"Create your account in just a few clicks. Register with CS BUZZ to start your journey into the world of computer science. Just enter your details and you’re ready to go!"}
                    />
                    <Step
                        stepName={"Personalize Your Learning Experience:"}
                        stepNumber={3}
                        stepDescription={"Set your learning goals and preferences. Our adaptive learning system will suggest the most effective path for you, adjusting to your pace and style. You can also choose to focus on specific topics or projects that interest you the most."}
                    />
                    <Step
                        stepName={"Apply Your Skills:"}
                        stepNumber={5}
                        stepDescription={"Put your skills to the test with hands-on projects and coding challenges. Build your software, apps, or algorithms with the guidance of our expert mentors and share your projects with peers for collaborative learning and feedback."}
                    />
                </div>
                <div className="how-it-works-steps-bottom-wrapper">
                    <Step
                        stepName={"Choose Your Course:"}
                        stepNumber={2}
                        stepDescription={"Browse through our extensive catalog of computer science courses. Whether you’re interested in learning the basics of programming, data science, or diving deep into artificial intelligence, we have something for every level of expertise."}
                    />

                    <Step
                        stepName={"Engage with Interactive Content:"}
                        stepNumber={4}
                        stepDescription={"Start learning through interactive lessons that make complex concepts easy to understand. Engage with video tutorials, practical coding exercises, and quizzes that ensure you grasp and retain knowledge effectively."}
                    />

                    <Step
                        stepName={"Track Your Progress:"}
                        stepNumber={6}
                        stepDescription={"Monitor your learning progress with our built-in tracking tools. See how much you’ve achieved and what’s left to master. Adjust your learning plan at any time to focus on areas that need more attention."}
                    />
                </div>


            </div >

        </>
    )
}
