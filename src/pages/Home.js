import React from 'react';
import FoodCategories from '../components/FoodCategories';
import LocalRecipe from '../components/LocalRecipe';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
    return (
        <main>
            <SearchRecipe />
            <section>
                <LocalRecipe />
                <FoodCategories />
            </section>
        </main>
    );
};

export default Home;
