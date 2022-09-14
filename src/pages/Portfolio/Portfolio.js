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
                <Project />
            </div>
        </section>
    );
};