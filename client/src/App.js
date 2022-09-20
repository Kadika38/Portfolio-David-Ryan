import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache
  } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/stylesheet.css';
import Footer from './components/Footer';
import Secret from './pages/Secret';
import ViewContacts from './pages/ViewContacts/ViewContacts';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Resume') {return <Resume />;};
        if (currentPage === 'Portfolio') {return <Portfolio />;};
        if (currentPage === 'Contact') {return <Contact />;};
        if (currentPage === 'Secret') {return <Secret handlePageChange={handlePageChange} />;};
        if (currentPage === 'View') {return <ViewContacts />;};
        return <About />;
    };

    const handlePageChange = (page) => {setCurrentPage(page)};


    return (
    <ApolloProvider client={client}>
        <Router>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <Routes>
                <Route path="/" element={renderPage()} />
            </Routes>
            <Footer />
        </Router>
    </ApolloProvider>
    );
};

export default App;
