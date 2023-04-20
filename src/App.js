import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume';
import './styles/stylesheet.css';
import Footer from './components/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Resume') {return <Resume />;};
        if (currentPage === 'Portfolio') {return <Portfolio />;};
        return <About />;
    };

    const handlePageChange = (page) => {setCurrentPage(page)};


    return (
        <Router>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <Routes>
                <Route path="/" element={renderPage()} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
