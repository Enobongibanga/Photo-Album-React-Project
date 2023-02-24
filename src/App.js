import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import FoodCategories from './components/FoodCategories';
import LocalRecipe from './components/LocalRecipe';

const App = () => {
    return (
        <main className="min-h-screen flex flex-col font-sans pt-8">
            <Header />
            <div className="flex-grow p-8 text-2xl">
                <section className="pb-6">
                    <div className="flex justify-center text-center mb-2 md:mb-3">
                        <h1 className="md:flex md:flex-wrap md:justify-center leading-6 text-black">
                            <span className="block md:inline md:mr-2 tracking-[.25em] text-sm font-semibold uppercase">Multiple Categories Simple recipes made for</span>{' '}
                            <span className="block md:inline font-mono">real, actual, everyday life.</span>
                        </h1>
                    </div>

                    <LocalRecipe />
                    <FoodCategories />
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default App;
