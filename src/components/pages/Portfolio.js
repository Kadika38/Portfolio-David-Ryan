import React from 'react';

export default function Portfolio() {
    return (
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
    );
};