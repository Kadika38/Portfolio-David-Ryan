import React from 'react';

export default function About() {
    return (
        <section className="flexy bodySec">
            <div className="fullContainer mainStuff">
                <h3>
                    About Me
                </h3>
                <br/>
                <img src={require('../assets/meForAccounts.jpg')}/>
                <br/>
                <br/>
                <p>
                    Hello!  My name is David Ryan.  Welcome to my portfolio page.  I'm a problem solver at heart; whenever I see a problem all I can do is think about ways to solve it.  That's why I got interested in coding.  It's so much fun.  I get to build super interesting and challenging apps and tools.
                </p>
                <br/>
                <p>
                    I've just graduated from the UCSD Extension Full Stack Flex Coding Bootcamp - I'm now a full stack web developer with deployed projects using tools like React and several different database types.
                </p>
                <br/>
                <p>
                    I have experience writing code in JavaScript, HTML, CSS, and SQL.  I have deployed projects using several different databases (SQL, MongoDB, indexedDB, GraphQL) and tools such as Express, Sequelize, and Mongoose.  I have multiple projects built using React and two built with Handlebars (React is my preference of the two by far).  I worked on a team of 4-5 on 3 projects, two of which are deployed and showcased in the Portfolio section of this site.
                </p>
                <br/>
                <p>
                    Outside of work I enjoy driving cars, exploring San Diego's restaurants, wineries, and breweries, reading, playing video games, seeing movies, and spending time with friends and family.
                </p>
                <br/>
                <p>
                    Peruse my portfolio - if you're interested enough to reach out, email works best.  My email is dryan10101@gmail.com.  My LinkedIn and GitHub are linked to at the bottom of the page.  You can also reach me with the contact form on the Contact page.  Thanks!
                </p>
            </div>
        </section>
    );
};