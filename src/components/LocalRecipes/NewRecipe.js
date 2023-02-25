import React, { useState } from 'react';

const NewRecipe = (props) => {
    const [recipe, setRecipe] = useState({
        food: '',
        country: '',
        image: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setRecipe((prevState) => {
                return {
                    ...prevState,
                    [e.target.name]: e.target.files[0]
                };
            });
            return;
        }
        setRecipe((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // pass the new product data to App.js from here
        props.handleAddRecipe(recipe);
        setRecipe({
            food: '',
            country: '',
            image: ''
        });
    };

    return (
        <section>
            <div className="flex flex-wrap content-center justify-center rounded-md px-4 bg-gray-100 py-6 max-w-xs">
                <h1 className="text-xl font-semibold text-center mb-3">Add Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="mb-2 block text-xs font-semibold" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            name="food"
                            id="food"
                            value={recipe.food}
                            onChange={handleChange}
                            required
                            placeholder="Enter Recipe Name"
                            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="mb-2 block text-xs font-semibold" htmlFor="title">
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value={recipe.country}
                            onChange={handleChange}
                            required
                            placeholder="Enter Recipe Country"
                            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="w-64 flex flex-col items-center px-4 py-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border-2 cursor-pointer hover:border-purple-700">
                            <span className="mt-2 text-sm leading-normal">Select Recipe Image</span>

                            <input
                                className="block w-full text-xs  rounded cursor-pointer focus:outline-none border border border-gray-300 placeholder-gray-400 mb-2"
                                id="image"
                                name="image"
                                type="file"
                                accept="image/png, image/jpeg"
                                required
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="flex justify-center mt-3">
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewRecipe;
