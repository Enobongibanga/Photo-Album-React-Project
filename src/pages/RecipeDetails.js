import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailsData = await data.json();
        setDetails(detailsData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img alt="Les Paul" src={details.image} className="aspect-square w-full rounded-xl object-cover" />
                    </div>

                    <div className="sticky top-0">
                        <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">{details.dishTypes}</strong>

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl">{details.title}</h1>

                                <p className="text-sm">{details.creditsText}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                                <p className="text-gray-900 title-font text-sm font-medium capitalize" dangerouslySetInnerHTML={{ __html: details.dishTypes }}></p>
                                <p className="text-gray-900 title-font text-sm font-medium capitalize" dangerouslySetInnerHTML={{ __html: details.occasions }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeDetails;
