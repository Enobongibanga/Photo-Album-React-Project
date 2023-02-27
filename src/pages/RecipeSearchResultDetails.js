import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeSearchResultDetails = () => {
    let params = useParams();
    const [searchDetails, setSearchDetails] = useState({});

    const getSearchedItem = async (searchitem) => {
        // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.searched}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchDetails(data);
            });
    };

    useEffect(() => {
        getSearchedItem();
    }, [params.searched]);

  return (
    <div>{searchDetails.strMeal}</div>
  )
}

export default RecipeSearchResultDetails