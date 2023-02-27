import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import AddRecipe from './AddRecipe';

import RecipeSearchResult from './RecipeSearchResult';
import RecipeSearchResultDetails from './RecipeSearchResultDetails';

import NotFound from './NotFound';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addrecipe" element={<AddRecipe />} />

            <Route path="/searchitem/:searched" element={<RecipeSearchResult />} />

            <Route path="/recipe/:name" element={<RecipeSearchResultDetails />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
