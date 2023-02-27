import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeSearchResultDetails = () => {
    let params = useParams();
    const [searchDetails, setSearchDetails] = useState([]);

    const fetchDetails = (searchitem) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchDetails(data.meals);
            });
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <section className="relative mx-auto max-w-screen-xl px-4 py-8">
            {searchDetails.map((item) => {
                return (
                    <div key={item.idMeal} className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                        <div>
                            <img src={item.strMealThumb} alt={item.strMeal} className="aspect-square w-full rounded-xl object-cover" />
                        </div>

                        <div className="sticky top-0">
                            <div className="flex gap-8 mt-10">
                                <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">{item.strMeal}</strong>
                                <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">{item.strArea}</strong>
                            </div>

                            <div className="mt-8 flex justify-between">
                                <div className="max-w-[35ch] space-y-2">
                                    <h2 className="text-xl font-bold sm:text-2xl">{item.strMeal}</h2>
                                    <p className="text-sm">{item.strCategory}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default RecipeSearchResultDetails;
