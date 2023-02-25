import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';

const RecipeCategory = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();



    const getCuisine = async (name)  => {
        const checkLocalStorage = localStorage.getItem('cuisine');
        if(checkLocalStorage){
            setCuisine(JSON.parse(checkLocalStorage))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cusine=${name}`);
            const recipes = await api.json();

            localStorage.setItem('cuisine', JSON.stringify(recipes.recipes))
            setCuisine(recipes.results);
        }




        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cusine=${name}`);
        const recipes = await api.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])
  return (
    <div className='flex justify-between flex-wrap'>
        {cuisine.map((item) => {
            return(
                <article className="group" key={item.id}>
                    <img
                        alt={item.sourceName}
                        src={item.image}
                        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                        <a href="#/">
                            <h3 className="text-lg font-medium text-gray-900">
                                {item.title}
                            </h3>
                        </a>

                        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            {item.summary}
                        </p>
                    </div>
                </article>
            )
        })}

    </div>
  )
}

export default RecipeCategory