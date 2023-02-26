import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import AddRecipe from './AddRecipe';
import RecipeCategory from './RecipeCategory';
import SearchedRecipe from './SearchedRecipe';
import RecipeDetails from './RecipeDetails';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/cuisine/:type" element={<RecipeCategory />} />
            <Route path="/searched/:search" element={<SearchedRecipe />} />
            <Route path="/recipe/:name" element={<RecipeDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
