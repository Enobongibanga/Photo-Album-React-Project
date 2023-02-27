import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await api.json();
        setPopular(data.categories);
    };

    return (
        <section className="text-gray-600">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-6 text-center">Popular Recipes</h1>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {popular.map((category) => {
                        return (
                            <div key={category.idCategory} className="lg:w-1/3 md:w-1/2 p-4 lg:gap-8 w-full">
                                <Link to={'/recipe/' + category.id}>
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <img className="object-cover object-center w-full h-full block" src={category.strCategoryThumb} alt={category.strCategory} decoding="async" loading="eager" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-sm font-bold tracking-widest title-font mb-1">{category.strCategory}</h3>
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category.strCategoryDescription}</h3>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Popular;
