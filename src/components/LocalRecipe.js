import React from 'react';

function LocalRecipe() {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Local Recipe</h2>

                                <p className="mt-4 text-gray-500">Do you have a recipe you want to add, click the button below to add the recipe!</p>
                            </header>

                            <a
                                href="/addrecipe"
                                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring">
                                Add Recipe
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <a href="#/" className="block group">
                                    <img
                                        src="https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4-840x1200.jpg"
                                        alt=""
                                        className="object-cover w-full rounded aspect-square h-56 w-96"
                                    />

                                    <div className="mt-3">
                                        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Afang Soup</h3>

                                        <p className="mt-1 text-sm text-gray-700">Country: Nigeria</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#/" className="block group">
                                    <img
                                        src="https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4-840x1200.jpg"
                                        alt=""
                                        className="object-cover w-full rounded aspect-square h-56 w-96"
                                    />

                                    <div className="mt-3">
                                        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Atama soup</h3>

                                        <p className="mt-1 text-sm text-gray-700">Country: Nigeria</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocalRecipe;
