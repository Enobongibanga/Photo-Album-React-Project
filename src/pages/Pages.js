import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
