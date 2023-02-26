import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Veggies = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        //check if there's anything in LocalStorage
        const checkLocalStorage = localStorage.getItem('veggie');
        if (checkLocalStorage) {
            setVeggie(JSON.parse(checkLocalStorage));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };

    return (
        <div className="md:max-w-6xl mx-auto px-4 pb-4 md:mt-0 md:pb-0 lg:px-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-6">Our Vegetarian Recipes</h1>

            <Splide
                options={{
                    perPage: 3,
                    drag: 'free',
                    gap: '3rem'
                }}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Link to={'/recipe/' + recipe.id}>
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
                                    <p className="relative bg-yellow-500 -mt-4 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xs font-bold tracking-wide">{recipe.title}</p>
                                </article>
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
            {/*</div>*/}
        </div>
    );
};

export default Veggies;
