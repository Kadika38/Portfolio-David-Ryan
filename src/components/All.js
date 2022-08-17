import React from "react";
import '../styles/stylesheet.css';

function All() {
  return (
    <div>
    <section id="titleContainer" className="flexy toSides">
        <div id="title">
            Portfolio: David Ryan
        </div>
        <div className="flexy">
            <div className="titleLink">
                <a className="titleA" href="#aboutMe">About Me</a>
            </div>
            <div className="titleLink">
                <a className="titleA" href="#work">Work</a>
            </div>
            <div className="titleLink">
                <a className="titleA" href="#contactMe">Contact Me</a>
            </div>
            <div className="titleLink">
                <a className="titleA" href={require('../assets/resume-david-ryan.pdf')} target="_blank">Resume</a>
            </div>
        </div>
    </section>

    <section id="backImgLP" className="flexy">
        <div>
            <img id="mePic" src={require('../assets/meForAccounts.jpg')} alt="An image of me"/>
        </div>
        <div id="coolSub">
            This is my portfolio site built with React!
        </div>
    </section>

    <section className="bodySec spacy"></section>

    <section id="aboutMe" className="flexy bodySec">
        <div className="fifteenContainer flexy bigSideWords">
            About Me
        </div>
        <div className="eightyFiveContainer mainStuff">
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

    <section className="bodySec spacy"></section>

    <section  id="work" className="flexy bodySec">
        <div className="fifteenContainer flexy bigSideWords">
            Work
        </div>
        <div className="flexy eightyFiveContainer mainStuffWork">
            <div id="work1" className="fullContainer workContainer">
                <div className="cover"></div>
                <div className="workInsideContainer">
                    <div className="workTitle workWords">
                        Pet Connect
                    </div>
                    <div className="workSubtitle workWords">
                        A pure bred dog marketplace - Bootcamp Team Project 02
                    </div>
                </div>
                <a className="invisLink" href="https://github.com/haleyhilton/P2-Petconnect" target="_blank"></a>
            </div>
            <div id="work2" className="fortyNineContainer workContainer workSmall">
                <div className="cover"></div>
                <div className="workInsideContainer">
                    <div className="workTitle workWords">
                        Tech Blog
                    </div>
                    <div className="workSubtitle workWords">
                        Tech Blog showcasing a deployed sql database
                    </div>
                </div>
                <a className="invisLink" href="https://github.com/Kadika38/Tech-Blog-David-Ryan" target="_blank"></a>
            </div>
            <div id="work3" className="fortyNineContainer workContainer workSmall">
                <div className="cover"></div>
                <div className="workInsideContainer">
                    <div className="workTitle workWords">
                        E-Commerce Back-End
                    </div>
                    <div className="workSubtitle workWords">
                        Back-End only program running an sql database
                    </div>
                </div>
                <a className="invisLink" href="https://github.com/Kadika38/E-Commerce-Back-End-David-Ryan" target="_blank"></a>
            </div>
            <div id="work4" className="fortyNineContainer workContainer workSmall">
                <div className="cover"></div>
                <div className="workInsideContainer">
                    <div className="workTitle workWords">
                        Employee Management System
                    </div>
                    <div className="workSubtitle workWords">
                        Command line app using an sql database
                    </div>
                </div>
                <a className="invisLink" href="https://github.com/Kadika38/Employee-Management-System-David-Ryan" target="_blank"></a>
            </div>
            <div id="work5" className="fortyNineContainer workContainer workSmall">
                <div className="cover"></div>
                <div className="workInsideContainer">
                    <div className="workTitle workWords">
                        JATE
                    </div>
                    <div className="workSubtitle workWords">
                        PWA text editor app
                    </div>
                </div>
                <a className="invisLink" href="https://github.com/Kadika38/PWA-Text-Editor-David-Ryan" target="_blank"></a>
            </div>
            
        </div>
    </section>

    <section className="bodySec spacy"></section>

    <section id="contactMe" className="flexy bodySec">
        <div className="fifteenContainer flexy bigSideWords">
            Contact Me
        </div>
        <div className="eightyFiveContainer flexy equally">
            <div className="footerA">
                760-532-0531
            </div>
            <div className="footerA">
                dryan10101@gmail.com
            </div>
            <div>
                <a className="footerA" href="https://github.com/Kadika38" target="_blank">GitHub</a>
            </div>
            <div>
                <a className="footerA" href="https://linkedin.com/in/david-ryan-305860183" target="_blank">LinkedIn</a>
            </div>
        </div>
    </section>

    <section id="spacyEnd" className="bodySec"></section>
    </div>
  );
};

export default All;