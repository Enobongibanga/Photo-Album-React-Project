import { useEffect, useState } from 'react';

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await api.json();
        setPopular(data.meals);
        // setPopular(data.recipes);
        console.log(data);
    };

    return (
        <div className="md:max-w-6xl mx-auto px-4 pb-4 md:mt-0 md:pb-0 lg:px-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Popular Recipes Categories</h1>
            <div className="md:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-0">
                {popular.map((meal) => {
                    return (
                        <article className="text-center col-span-2 -mx-4 md:hidden" key={meal.id}>
                            <a className="block md:hover:opacity-60 flex flex-col h-full" href="/">
                                <img
                                    width="840"
                                    height="1200"
                                    src={meal.strCategoryThumb}
                                    className="object-cover self-center w-full h-80"
                                    alt={meal.sourceName}
                                    decoding="async"
                                    loading="eager"
                                    data-pin-nopin="true"
                                    sizes="(max-width: 840px) 100vw, 840px"
                                />
                                <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xxs sm:text-xs font-bold uppercase tracking-extra-widest sm:tracking-giant">
                                    {meal.strCategory}
                                </p>
                            </a>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
