import React from 'react';

import { FaTrashAlt } from 'react-icons/fa';

const Recipe = ({ id, food, country, image, handleDelete }) => {
    return (
        <li className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl w-full max-w-[16rem]">
            <div className="pt-4 text-gray-500">
                <img src={image && URL.createObjectURL(image)} alt="Food" className="object-cover w-full rounded aspect-square h-56 w-96" />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Title: {food}</h3>

                <p className="mt-2 hidden text-sm sm:block">Country: {country}</p>
            </div>

            <div className="absolute right-2 bottom-2">
                <button onClick={() => handleDelete(id)}>
                    <FaTrashAlt />
                </button>
            </div>
        </li>
    );
};

export default Recipe;
