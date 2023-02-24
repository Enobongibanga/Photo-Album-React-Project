import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import FoodCategories from './components/FoodCategories';
import LocalRecipe from './components/LocalRecipe';
import SearchRecipe from './components/SearchRecipe';

const App = () => {
    return (
        <main className="min-h-screen flex flex-col font-sans pt-8">
            <Header />
            <div className="flex-grow p-8 text-2xl">
                <SearchRecipe />
                <section>
                    <LocalRecipe />
                    <FoodCategories />
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default App;
