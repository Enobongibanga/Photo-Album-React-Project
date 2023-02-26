import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchedRecipe = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const checkLocalStorage = localStorage.getItem('searchedRecipes');
        if (checkLocalStorage) {
            setSearchedRecipes(JSON.parse(checkLocalStorage));
        } else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=&{name}`);
            const recipes = await data.json();

            localStorage.setItem('searchedRecipes', JSON.stringify(recipes.recipes));
            setSearchedRecipes(recipes.results);
        }
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <div className="flex justify-between flex-wrap">
            {searchedRecipes.map((item) => {
                return (
                    <article className="group" key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                            <img alt={item.sourceName} src={item.image} className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]" />

                            <div className="p-4">
                                <a href="#/">
                                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                                </a>

                                <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">{item.summary}</p>
                            </div>
                        </Link>
                    </article>
                );
            })}
        </div>
    );
};

export default SearchedRecipe;
