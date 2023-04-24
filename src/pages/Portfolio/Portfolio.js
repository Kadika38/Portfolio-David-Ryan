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
                <Project num="1" title="PetConnect 2.0" subtitle="Bootcamp Final Project - MERN Stack" link="https://petconnect-p3.herokuapp.com/" />
                <Project num="2" title="Book Search Engine" subtitle="My first React app" link="https://github.com/Kadika38/Book-Search-Engine-David-Ryan" />
                <Project num="3" title="JATE" subtitle="PWA Text Editor" link="https://jate-david-ryan.herokuapp.com/" />
                <Project num="4" title="PetConnect 1.0" subtitle="Bootcamp Project - Deployed SQL and Handlebars Website" link="https://thepetconnection.herokuapp.com/" />
                <Project num="5" title="Social Network API" subtitle="Back-end only exemplifying MongoDB and Mongoose" link="https://github.com/Kadika38/Social-Network-API-David-Ryan" />
                <Project num="6" title="Tech Blog" subtitle="Simple blog site using express, handlebars, and sequelize" link="https://tech-blog-david-ryan.herokuapp.com/" />
            </div>
        </section>
    );
};