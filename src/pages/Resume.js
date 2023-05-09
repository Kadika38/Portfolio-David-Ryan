import React from 'react';

export default function Resume() {
    return (
        <section className="flexy bodySec">
            <div className="flexy mainStuff">
                <h3>
                    Resume
                </h3>
                <br></br>
                <div className='resumeSpacerBig'></div>
                <div className='fullContainer'>
                    <p>
                        See my <a id='resumeLink' href='https://docs.google.com/document/d/11Uazgf6W9LWKCMOCNfqiO3cZmumOIGHIvE9_XoUa0UA/edit?usp=sharing' target="_blank">resume</a></p>
                </div>
                <br></br>
                <div className='resumeSpacer'></div>
                <div className='fullContainer'>
                    <h4 className='resumeTitle'>Languages</h4>
                    <ul className='resumeList'>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C++</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <br></br>
                <div className='resumeSpacer'></div>
                <div className='fullContainer'>
                    <h4 className='resumeTitle'>Proficiencies</h4>
                    <ul className='resumeList'>
                        <li>React</li>
                        <li>APIs</li>
                        <li>AWS</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                        <li>Mongoose</li>
                        <li>Sequelize</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>MERN</li>
                        <li>Debugging</li>
                    </ul>
                </div>
                <br></br>
                <div className='resumeSpacer'></div>
                <div className='fullContainer'>
                    <h4 className='resumeTitle'>Soft Skills</h4>
                    <ul className='resumeList'>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        <li>Always Learning</li>
                        <li>Quick to Adapt</li>
                        <li>Can Do Attitude</li>
                        <li>Problem Solving</li>
                        <li>Creativity</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};