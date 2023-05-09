import React from 'react';
import Project from './components/Project';

export default function Portfolio() {
    return (
        <section className="flexy bodySec">
            <div className='fullContainer mainStuff'>
                <h3>
                    Portfolio
                </h3>
            </div>
            <div className="flexy fullContainer mainStuffWork">
                <Project num="1" title="JSONBucket" subtitle="JSON to Java Object conversion" link="https://github.com/Kadika38/JSONBucket" />
                <Project num="2" title="PetConnect 2.0" subtitle="Bootcamp Final Project - MERN Stack" link="https://petconnect-p3.herokuapp.com/" />
                <Project num="3" title="Book Search Engine" subtitle="My first React app" link="https://book-search-engine-david-ryan.herokuapp.com/" />
                <Project num="4" title="JATE" subtitle="PWA Text Editor" link="https://jate-david-ryan.herokuapp.com/" />
                <Project num="5" title="Social Network API" subtitle="Back-end only exemplifying MongoDB and Mongoose" link="https://github.com/Kadika38/Social-Network-API-David-Ryan" />
            </div>
        </section>
    );
};