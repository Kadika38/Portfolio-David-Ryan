import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
    return (
        <section id="titleContainer" className="flexy toSides">
        <div id="title">
            Portfolio: David Ryan
        </div>
        <div className="flexy">
            <div className="titleLink">
                <a
                className="secretNav"
                href="#secret"
                onClick={() => handlePageChange('Secret')}
                >
                    Secret
                </a>
            </div>
            <div className="titleLink">
                <a
                className={currentPage === 'About' ? 'titleACurrent' : 'titleA'}
                href="#aboutMe"
                onClick={() => handlePageChange('About')}
                >
                    About Me
                </a>
            </div>
            <div className="titleLink">
                <a
                className={currentPage === 'Portfolio' ? 'titleACurrent' : 'titleA'}
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>
            </div>
            <div className="titleLink">
                <a
                className={currentPage === 'Contact' ? 'titleACurrent' : 'titleA'}
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </div>
            <div className="titleLink">
                <a
                className={currentPage === 'Resume' ? 'titleACurrent' : 'titleA'}
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                >
                    Resume
                </a>
            </div>
        </div>
    </section>
    );
};