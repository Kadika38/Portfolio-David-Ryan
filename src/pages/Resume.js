import React from 'react';

//TODO: fix spacing by sectioning into "fullContainer" divs

export default function Resume() {
    return (
        <section className="flexy bodySec">
            <div className="flexy mainStuff">
                <h3>
                    Resume
                </h3>
                <br></br>
                <p>
                    Download my 
                    <span> resume</span>
                </p>
                <br></br>
                <h4>Front-end Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <br></br>
                <h4>Back-end Proficiencies</h4>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                </ul>
            </div>
        </section>
    );
};