import React, { useState } from 'react';

import { getUniqueId } from './utility/uniqueId';
import NewRecipe from './components/recipes/NewRecipe';
import Recipes from './components/recipes/Recipes';

const recipesDummyData = [
    {
        id: getUniqueId(),
        food: "rice",
        country: "Nigeria",
        image: ""
    }
];

const App = () => {
    const [recipes , setRecipes ] = useState(recipesDummyData);

    const handleAddRecipe = (value) => {
        const newRecipe= { id: getUniqueId(), ...value };
        const existingRecipes = [...recipes]
        existingRecipes.push(newRecipe)
        setRecipes(existingRecipes)
    };

    const handleDelete = (id) => { 
        const existingRecipes = [...recipes]
        const filteredRecipe = existingRecipes.filter((recipe)=>recipe.id !== id);
        setRecipes(filteredRecipe)
     };

    return (
        <div className="container">
            <NewRecipe handleAddRecipe={handleAddRecipe}  />
            <Recipes recipes ={recipes} handleDelete={handleDelete} />
        </div>
        
    );
};

export default App;