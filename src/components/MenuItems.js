import React from "react";

const MealItems = (getMeal) => {
    console.log(getMeal.data);
    return (
        <>
            <div className="card">
                <img src={getMeal.data.strMealThumb}></img>
                <div className="info">
                    <h2>{getMeal.data.strMeal}</h2>
                    <p>{getMeal.data.strArea} Food</p>
                    
                </div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <p>{getMeal.data.strInstructions}</p>
                    <img src={getMeal.data.strMealThumb}></img>
                    <a href={getMeal.data.strSourse}>Watch Video</a>
                </div>
            </div>

        </>
    )
}

export default MealItems;