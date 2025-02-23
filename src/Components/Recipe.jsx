import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const [recipe, setRecipe] = useState(null);
    const { mealid } = useParams();

    useEffect(() => {
        const getRecipe = async () => {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            let data = await response.json();
            setRecipe(data.meals ? data.meals[0] : null);
        };

        getRecipe();
    }, [mealid]); 

    return (
        <div className="max-w-4xl mx-auto p-8">
            {!recipe ? (
                <p className="text-lg font-semibold text-red-500 text-center">Data Not Found</p>
            ) : (
                <div className="bg-[#FFF0DC] shadow-2xl rounded-lg p-10">
                    <h1 className="text-3xl font-bold text-center text-orange-800 mb-5">
                        {recipe.strMeal}
                    </h1>

                    <img 
                        src={recipe.strMealThumb} 
                        alt={recipe.strMeal} 
                        className="w-full max-h-96 object-cover rounded-lg shadow-2xl p-3"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-8 px-4">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-semibold text-black mb-3">Recipe Detail:</h3>
                            <p className="text-black text-justify">{recipe.strInstructions}</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-3">Ingredients:</h3>
                            <ul className="list-disc pl-5 text-black">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => {
                                    const ingredient = recipe[`strIngredient${num}`];
                                    const measure = recipe[`strMeasure${num}`];
                                    return ingredient ? (
                                        <li key={num}>
                                            {measure} {ingredient}
                                        </li>
                                    ) : null;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recipe;
