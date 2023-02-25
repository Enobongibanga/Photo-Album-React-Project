import React from 'react';

import { FaTrashAlt } from 'react-icons/fa';



const Recipe = ({ id, food, country, image, handleDelete}) => {

  return (
    <article className="recipe">
      <div className="recipe__upper">
        <h3 className="recipe__title"></h3>
        <button onClick={() => handleDelete(id)}>
          <FaTrashAlt />
        </button>
      </div>
      <div className="recipe__lower">
        <p className="recipe__country">Country: {country}</p>
        <p className="recipe__foood">Food: {food}</p>
        <p className="recipe__image"><span className="vertical-align-top">Image:&nbsp;</span><img width="100" height="100" src={image && URL.createObjectURL(image)} /></p>
      </div>
    </article>
  );
};
 
export default Recipe;
