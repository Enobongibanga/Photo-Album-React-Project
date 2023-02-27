import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeSearchResult() {
    let params = useParams();

    const [searchResult, setSearchResult] = useState([]);

    const getSearchedItem = async (searchitem) => {
        // // const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        // // const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
        // const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchitem}`);
        // // const data = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
        // const detailsData = await data.json();
        // setSearchResultDetails(detailsData);
        // console.log(detailsData)



        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchitem}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchResult(data.meals);
            });
    };



    useEffect(() => {
        getSearchedItem(params.searched);
    }, [params.searched]);

    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772

    return (
        <section className="mt-20 container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                    {
                searchResult.map(item =>
                    <article key={item.idMeal} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    
            {/* <Link to={'/search/' + searchResult.data.idMeal}> */}
                <img src={item.strMealThumb} alt={item.strMeal} className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]" />

                <div className="p-4">
                    <div>
                        <h3 className="text-gray-800 text-base tracking-widest">{item.strMeal}</h3>
                    </div>

                    <p className="mt-2 text-gray-500 text-xs tracking-widest">{item.strArea}</p>
                </div>
            {/* </Link> */}
        
                </article>
                )
              }
                        
            </div>
        </section>
    );
}

export default RecipeSearchResult;
