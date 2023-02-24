import React from 'react';

function FoodCategories() {
    return (
        <section className="md:bg-gray-100 md:pt-6 md:pb-8 lg:pt-8 lg:pb-10 home-hero">
            <div className="md:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-0">
                <article className="text-center col-span-2 -mx-4 md:hidden">
                    <a className="block md:hover:opacity-60 flex flex-col h-full" href="/">
                        <img
                            width="840"
                            height="1200"
                            src="https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4-840x1200.jpg"
                            className="object-cover self-center w-full h-80"
                            alt="A bowl filled with Moroccan chickpeas."
                            decoding="async"
                            loading="eager"
                            data-pin-nopin="true"
                            sizes="(max-width: 840px) 100vw, 840px"
                        />
                        <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xxs sm:text-xs font-bold uppercase tracking-extra-widest sm:tracking-giant">
                            Legume
                        </p>
                    </a>
                </article>
                <article className="text-center">
                    <a className="block md:hover:opacity-60 flex flex-col h-full" href="/">
                        <img
                            width="840"
                            height="1200"
                            src="https://pinchofyum.com/wp-content/uploads/Beet-Salad-65-840x1200.jpg"
                            className="object-cover self-center w-44 h-44 md:w-full md:h-full"
                            alt="Beet salad in a bowl with whipped feta and garnishes"
                            decoding="async"
                            loading="eager"
                            data-pin-nopin="true"
                            sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                        />
                        <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xxs sm:text-xs font-bold uppercase tracking-extra-widest sm:tracking-giant">
                            Salads
                        </p>
                    </a>
                </article>
                <article className="text-center">
                    <a className="block md:hover:opacity-60 flex flex-col h-full" href="/">
                        <img
                            width="840"
                            height="1200"
                            src="https://pinchofyum.com/wp-content/uploads/Red-Chile-Chicken-Tacos-1-840x1200.jpg"
                            className="object-cover self-center w-44 h-44 md:w-full md:h-full"
                            alt="Chicken tacos on a plate with creamy corn"
                            decoding="async"
                            loading="eager"
                            data-pin-nopin="true"
                            sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                        />
                        <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xxs sm:text-xs font-bold uppercase tracking-extra-widest sm:tracking-giant">
                            Winter
                        </p>
                    </a>
                </article>
                <article className="text-center">
                    <a className="block md:hover:opacity-60 flex flex-col h-full" href="/">
                        <img
                            width="840"
                            height="1200"
                            src="https://pinchofyum.com/wp-content/uploads/Roasted-Cauliflower-Burrito-Bowls-1-840x1200.jpg"
                            className="object-cover self-center w-44 h-44 md:w-full md:h-full"
                            alt="Roasted Cauliflower Burrito Bowl with toppings."
                            decoding="async"
                            loading="eager"
                            data-pin-nopin="true"
                            sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                            data-pin-description="Roasted Cauliflower Burrito Bowls! Roasty and spicy cauliflower, rice, pico de gallo, sweet corn, black beans, and avocado. A healthy, vegetarian meal that's quick to throw together and awesome for meal prep! #cauliflower #burrito #vegetarian #vegan #plantbased #meatless #dinner #recipe | pinchofyum.com"
                        />
                        <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xxs sm:text-xs font-bold uppercase tracking-extra-widest sm:tracking-giant">
                            Sugar-Free
                        </p>
                    </a>
                </article>
                <article className="text-center">
                    <a className="block md:hover:opacity-60 flex flex-col h-full" href="/">
                        <img
                            width="840"
                            height="1200"
                            src="https://pinchofyum.com/wp-content/uploads/Country-Chicken-Stew-2-840x1200.jpg"
                            className="object-cover self-center w-44 h-44 md:w-full md:h-full"
                            alt=""
                            decoding="async"
                            loading="eager"
                            data-pin-nopin="true"
                            sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                        />
                        <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white bg-yellow-500 text-xxs sm:text-xs font-bold uppercase tracking-extra-widest sm:tracking-giant">
                            Dairy-Free
                        </p>
                    </a>
                </article>
            </div>
        </section>
    );
}

export default FoodCategories;
