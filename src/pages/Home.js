import React from 'react';

import Popular from '../components/ForeignRecipe/Popular';
import Veggies from '../components/ForeignRecipe/Veggies';
import RecipeCategories from '../components/RecipeCategories';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
    return (
        <main>
            <SearchRecipe />

            <RecipeCategories />

            <Popular />

            <Veggies />
        </main>
    );
};

export default Home;
