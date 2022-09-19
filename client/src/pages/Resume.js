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
                        Download my <a id='resumeLink' href='../assets/resume-david-ryan.pdf' download target="_blank">resume</a></p>
                </div>
                <br></br>
                <div className='resumeSpacer'></div>
                <div className='fullContainer'>
                    <h4 className='resumeTitle'>Front-end Proficiencies</h4>
                    <ul className='resumeList'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <br></br>
                <div className='resumeSpacer'></div>
                <div className='fullContainer'>
                    <h4 className='resumeTitle'>Back-end Proficiencies</h4>
                    <ul className='resumeList'>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};