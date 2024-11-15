"use client"

import { useEffect, useState } from "react";



function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);
    const [description, setDescription] = useState("Select an item to see meal ideas")

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    async function loadMealIdeas() {
        const data = await fetchMealIdeas(ingredient);
        if (data.meals) {
            setMeals([...data.meals]);
            setDescription(`Here are some meal ideas using ${ingredient}:`);
        }
        else {
            setMeals([]);
            if (ingredient) {
                setDescription(`No meal ideas found for ${ingredient}`);
            }
        }
    }

    return (
        <div>
            <p className="ml-10 text-green-700">
                {description}
            </p>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="mx-10 my-5 bg-green-600 p-2 rounded-xl max-w-sm">
                        <h1 className="font-semibold text-xl">{meal.strMeal}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        // console.dir(response);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default MealIdeas;