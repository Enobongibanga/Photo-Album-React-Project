import React from 'react';
// import FoodCategories from '../components/FoodCategories';
// import LocalRecipe from '../components/LocalRecipe';
// import SearchRecipe from '../components/SearchRecipe';
import Popular from '../components/ForeignRecipe/Popular';
import Veggies from '../components/ForeignRecipe/Veggies';

const Home = () => {
    return (
        <main>
            {/*<SearchRecipe />*/}

            <Popular />

            <Veggies />

        </main>
    );
};

export default Home;
