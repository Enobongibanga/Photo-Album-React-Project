import React from 'react';
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiChopsticks, GiNoodles } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';

const RecipeCategories = () => {
    return (
        <div className="flex justify-center gap-8 text-base font-medium my-16 md:my-24">
            <NavLink className="hover:text-pink-500" to={'/cuisine/italian'}>
                <span className="flex justify-center">
                    <FaPizzaSlice />
                </span>
                <h4 className="">Itailan</h4>
            </NavLink>
            <NavLink className="hover:text-pink-500" to={'/cuisine/american'}>
                <span className="flex justify-center">
                    <FaHamburger />
                </span>
                <h4>American</h4>
            </NavLink>
            <NavLink className="hover:text-pink-500" to={'/cuisine/thai'}>
                <span className="flex justify-center">
                    <GiNoodles />
                </span>
                <h4>Thai</h4>
            </NavLink>
            <NavLink className="hover:text-pink-500" to={'/cuisine/japanese'}>
                <span className="flex justify-center">
                    <GiChopsticks />
                </span>
                <h4>Japanese</h4>
            </NavLink>
        </div>
    );
};

export default RecipeCategories;
