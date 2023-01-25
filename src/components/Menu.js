import React, { useState } from "react";
import MealItems from "./MenuItems";

const Menu=() => {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState();
    const searchMeal=(evt)=>{
        if(evt.key==="Enter"){
            fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json)
            .then(data=>{
                setMeal(data.meals);
            })
        }
    }
    return(
        <div className="main">
            <div className="heading">
                <h1>Search Your Favorite Meal</h1>
                <br/>
                <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
                <br/>
            </div>
            <div className="search-box">
                <input type="search" className="search-bar" placeholder="Enter Your Food Item" onChange={(e)=>setSearch(e.target.value)} value = {search} onKeyDown={searchMeal}></input>

            </div>
            <div className="container">
                {
                    (Mymeal==null)? <p className="notfound">Not Found</p> : Mymeal.map((res)=>{
                        return(
                            <MealItems data={res}/>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Menu ;