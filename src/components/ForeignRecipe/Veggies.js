import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Veggies = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        //check if there's anything in LocalStorage
        const checkLocalStorage = localStorage.getItem('veggie');
        if (checkLocalStorage) {
            setVeggie(JSON.parse(checkLocalStorage));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };

    return (
        <>
            <section className="text-gray-600">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-6 text-center">Popular Vegetarian Recipes</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {veggie.map((recipe) => {
                            return (
                                <div key={recipe.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link to={'/recipe/' + recipe.id}>
                                        <div className="block relative h-48 rounded overflow-hidden">
                                            <img className="object-cover object-center w-full h-full block" src={recipe.image} alt={recipe.sourceName} decoding="async" loading="eager" />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{recipe.title}</h3>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Veggies;
