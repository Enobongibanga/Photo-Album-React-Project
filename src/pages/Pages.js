import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import AddRecipe from './AddRecipe';
import RecipeCategory from './RecipeCategory';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/cuisine/:type" element={<RecipeCategory />}/>
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default Pages;
