import React from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe';

const Recipes = ({ recipes, handleDelete }) => {
    return (
        <>
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} handleDelete={handleDelete} {...recipe} />
            ))}
        </>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array
};

export default Recipes;
