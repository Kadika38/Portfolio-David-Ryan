import React from 'react';

export default function About() {
    return (
        <section className="flexy bodySec">
            <div className="fullContainer mainStuff">
                <h3>
                    About Me
                </h3>
                <br/>
                <img src={require('../../assets/meForAccounts.jpg')}/>
                <br/>
                <br/>
                <p>
                    Hello!  My name is David Ryan.  I'm currently studying at the UCSD Extension Coding Bootcamp to learn coding.  I graduate from that in September 2022.  Welcome to my portfolio page.  I'm a problem solver at heart; whenever I see a problem all I can do is think about ways to solve it.  That's why I got interested in coding.  It's so much fun.  I get to build super interesting and challenging websites and tools.
                </p>
                <br/>
                <p>
                    Here you'll have access to see some of my projects as well as info about how to contact me.  I'm a very responsive person when to comes to contacting me.  I check my email roughly twice a day at minimum and I answer texts as soon as I read them (usually within an hour or two).  I do not answer phone calls from unknown numbers unless I'm expecting a call.  Feel free to reach out to me whenever.
                </p>
                <br/>
                <p>
                    I'm have experience writing code in JavaScript, HTML, CSS, and SQL.  I have deployed projects using several different databases (SQL, MongoDB, indexedDB, GraphQL) and tools such as Express, Sequelize, and Mongoose.  I worked on a team of 4-5 on 2 projects so far (1 more to come during bootcamp) one of which is deployed and shown below.  I've also deployed projects using tools such as Handlebars and (more importantly) React.
                </p>
                <br/>
                <p>
                    Outside of work I enjoy driving cars, exploring San Diego's restaurants, wineries, and breweries, reading, playing video games, seeing movies, and spending time with friends and family.
                </p>
            </div>
        </section>
    );
};