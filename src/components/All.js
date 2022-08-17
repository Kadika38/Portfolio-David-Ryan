import React from "react";
import '../styles/stylesheet.css';

function All() {
  return (
    <div>
    <section id="titleContainer" class="flexy toSides">
        <div id="title">
            Portfolio: David Ryan
        </div>
        <div class="flexy">
            <div class="titleLink">
                <a class="titleA" href="#aboutMe">About Me</a>
            </div>
            <div class="titleLink">
                <a class="titleA" href="#work">Work</a>
            </div>
            <div class="titleLink">
                <a class="titleA" href="#contactMe">Contact Me</a>
            </div>
            <div class="titleLink">
                <a class="titleA" href={require('../assets/resume-david-ryan.pdf')} target="_blank">Resume</a>
            </div>
        </div>
    </section>

    <section id="backImgLP" class="flexy">
        <div>
            <img id="mePic" src={require('../assets/meForAccounts.jpg')} alt="An image of me"/>
        </div>
        <div id="coolSub">
            This is my portfolio site built with React!
        </div>
    </section>

    <section class="bodySec spacy"></section>

    <section id="aboutMe" class="flexy bodySec">
        <div class="fifteenContainer flexy bigSideWords">
            About Me
        </div>
        <div class="eightyFiveContainer mainStuff">
            <p>
                Hello!  My name is David Ryan.  I'm currently studying at the UCSD Extension Coding Bootcamp to learn coding.  I graduate from that in September 2022.  Welcome to my portfolio page.  I'm a problem solver at heart; whenever I see a problem all I can do is think about ways to solve it.  That's why I got interested in coding.  It's so much fun.  I get to build super interesting and challenging websites and tools.
            </p>
            <br/>
            <p>
                Here you'll have access to see some of my projects as well as info about how to contact me.  I'm a very responsive person when to comes to contacting me.  I check my email roughly twice a day at minimum and I answer texts as soon as I read them (usually within an hour or two).  I do not answer phone calls from unknown numbers unless I'm expecting a call.  Feel free to reach out to me whenever.
            </p>
        </div>
    </section>

    <section class="bodySec spacy"></section>

    <section  id="work" class="flexy bodySec">
        <div class="fifteenContainer flexy bigSideWords">
            Work
        </div>
        <div class="flexy eightyFiveContainer mainStuffWork">
            <div id="work1" class="fullContainer workContainer">
                <div class="cover"></div>
                <div class="workInsideContainer">
                    <div class="workTitle workWords">
                        Pet Connect
                    </div>
                    <div class="workSubtitle workWords">
                        A pure bred dog marketplace - Bootcamp Team Project 02
                    </div>
                </div>
                <a class="invisLink" href="https://github.com/haleyhilton/P2-Petconnect" target="_blank"></a>
            </div>
            <div id="work2" class="fortyNineContainer workContainer workSmall">
                <div class="cover"></div>
                <div class="workInsideContainer">
                    <div class="workTitle workWords">
                        Tech Blog
                    </div>
                    <div class="workSubtitle workWords">
                        Tech Blog showcasing a deployed sql database
                    </div>
                </div>
                <a class="invisLink" href="https://github.com/Kadika38/Tech-Blog-David-Ryan" target="_blank"></a>
            </div>
            <div id="work3" class="fortyNineContainer workContainer workSmall">
                <div class="cover"></div>
                <div class="workInsideContainer">
                    <div class="workTitle workWords">
                        E-Commerce Back-End
                    </div>
                    <div class="workSubtitle workWords">
                        Back-End only program running an sql database
                    </div>
                </div>
                <a class="invisLink" href="https://github.com/Kadika38/E-Commerce-Back-End-David-Ryan" target="_blank"></a>
            </div>
            <div id="work4" class="fortyNineContainer workContainer workSmall">
                <div class="cover"></div>
                <div class="workInsideContainer">
                    <div class="workTitle workWords">
                        Employee Management System
                    </div>
                    <div class="workSubtitle workWords">
                        Command line app using an sql database
                    </div>
                </div>
                <a class="invisLink" href="https://github.com/Kadika38/Employee-Management-System-David-Ryan" target="_blank"></a>
            </div>
            <div id="work5" class="fortyNineContainer workContainer workSmall">
                <div class="cover"></div>
                <div class="workInsideContainer">
                    <div class="workTitle workWords">
                        Note Taker
                    </div>
                    <div class="workSubtitle workWords">
                        Note taking app that uses a json file as a database
                    </div>
                </div>
                <a class="invisLink" href="https://github.com/Kadika38/Note-Taker-David-Ryan" target="_blank"></a>
            </div>
            
        </div>
    </section>

    <section class="bodySec spacy"></section>

    <section id="contactMe" class="flexy bodySec">
        <div class="fifteenContainer flexy bigSideWords">
            Contact Me
        </div>
        <div class="eightyFiveContainer flexy equally">
            <div class="footerA">
                760-532-0531
            </div>
            <div class="footerA">
                dryan10101@gmail.com
            </div>
            <div>
                <a class="footerA" href="https://github.com/Kadika38" target="_blank">GitHub</a>
            </div>
            <div>
                <a class="footerA" href="https://linkedin.com/in/david-ryan-305860183" target="_blank">LinkedIn</a>
            </div>
        </div>
    </section>

    <section id="spacyEnd" class="bodySec"></section>
    </div>
  );
};

export default All;