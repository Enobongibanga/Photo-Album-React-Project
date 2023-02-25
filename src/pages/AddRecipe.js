import React, { useState } from 'react';

import { getUniqueId } from '../utility/uniqueId';
import NewRecipe from '../components/LocalRecipes/NewRecipe';
import Recipes from '../components/LocalRecipes/Recipes';
import dummyImage from '../assets/logo192.png';

const recipesDummyData = [
    {
        id: getUniqueId(),
        food: 'Coconut Rice',
        country: 'Nigeria',
        image: ''
    },
    {
        id: getUniqueId(),
        food: 'Pizza',
        country: 'UK',
        image: ''
    },
    {
        id: getUniqueId(),
        food: 'Bread',
        country: 'India',
        image: ''
    }
];

const AddRecipe = () => {
    const [recipes, setRecipes] = useState(recipesDummyData);

    const handleAddRecipe = (value) => {
        const newRecipe = { id: getUniqueId(), ...value };
        const existingRecipes = [...recipes];
        existingRecipes.push(newRecipe);
        setRecipes(existingRecipes);
    };

    const handleDelete = (id) => {
        const existingRecipes = [...recipes];
        const filteredRecipe = existingRecipes.filter((recipe) => recipe.id !== id);
        setRecipes(filteredRecipe);
    };

    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="flex justify-between gap-12">
                        <NewRecipe handleAddRecipe={handleAddRecipe} />
                        <ul className="flex justify-between w-full flex-wrap gap-4">
                            <Recipes recipes={recipes} handleDelete={handleDelete} />
                        </ul>
                    </div>
            </div>
        </section>
    );
};

export default AddRecipe;
