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
        <div className="card">
            <h2 className="title">Add RECIPE</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="field-group">
                    <label htmlFor="title">Food: </label>
                    <input type="text" name="food" id="food" value={recipe.food} onChange={handleChange} required />
                </div>
                <div className="field-group">
                    <label htmlFor="price">Country: </label>
                    <input type="text" name="country" id="country" value={recipe.country} onChange={handleChange} required />
                </div>

                <div>
                    <label for="avatar">Upload Food Picture:</label>
                    <input type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleChange} />
                </div>

                <div className="field-group">
                    <button className="btn" type="submit">
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewRecipe;
