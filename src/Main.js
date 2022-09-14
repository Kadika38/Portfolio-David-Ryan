import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/stylesheet.css';
import Footer from './components/Footer';

export default function Main() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Resume') {return <Resume />;};
        if (currentPage === 'Portfolio') {return <Portfolio />;};
        if (currentPage === 'Contact') {return <Contact />;};
        return <About />;
    };

    const handlePageChange = (page) => {setCurrentPage(page)};

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};