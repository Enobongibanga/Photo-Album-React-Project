import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchRecipe = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

    return (
        <section className="bg-green-100">
            <div className="p-8 md:p-12 lg:px-16 lg:pb-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Search Recipes Worldwide</h1>

                    <p className="hidden text-gray-500 sm:mt-4 sm:block">Enter recipe name to get the recipe and ingredients</p>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                            <label htmlFor="email" className="sr-only">
                                Enter Recipe name
                            </label>

                            <input
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                type="text"
                                placeholder="Enter Recipe name"
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchRecipe;
