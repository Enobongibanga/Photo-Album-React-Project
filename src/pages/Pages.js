import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import AddRecipe from './AddRecipe';
import SearchedRecipe from './SearchedRecipe';
import RecipeDetails from './RecipeDetails';

import RecipeSearchResult from './RecipeSearchResult';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/searched/:search" element={<SearchedRecipe />} />
            <Route path="/recipe/:name" element={<RecipeDetails />} />

            <Route path="/searchitem/:searched" element={<RecipeSearchResult />} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
