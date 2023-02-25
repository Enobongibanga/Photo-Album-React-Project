import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        //check if there's anything in LocalStorage
        const checkLocalStorage = localStorage.getItem('popular');
        if(checkLocalStorage){
            setPopular(JSON.parse(checkLocalStorage))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
            const data = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes);
        }
    };

    return (
        <div className="md:max-w-6xl mx-auto px-4 pb-4 md:mt-0 md:pb-0 lg:px-0 mb-16 md:mb-24">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-6">Popular Recipes</h1>
            {/*<div className="md:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-0">*/}
                <Splide options={{
                    perPage: 4,
                    drag: 'free',
                    gap: '3rem'
                }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <article className="block md:hover:opacity-60 flex flex-col h-full">
                                <img
                                    width="840"
                                    height="1200"
                                    src={recipe.image}
                                    className="object-cover self-center w-full h-80 rounded-t"
                                    alt={recipe.sourceName}
                                    decoding="async"
                                    loading="eager"
                                    data-pin-nopin="true"
                                    sizes="(max-width: 840px) 100vw, 840px"
                                />
                                <p className="w-full relative bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xs font-bold tracking-wide">
                                    {recipe.title}
                                </p>
                            </article>
                        </SplideSlide>
                    );
                })}
                </Splide>
            {/*</div>*/}
        </div>
    );
};

export default Popular;
