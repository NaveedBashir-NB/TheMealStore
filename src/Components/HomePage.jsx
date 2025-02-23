import React, { useState } from 'react'
import MealCard from './MealCard';

const HomePage = () => {
    const [food, setFood] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch (e.target.value)
    }
  
    const getAPI = async () => {
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      let foodAPI = await response.json();
      setFood(foodAPI.meals); 
  };

  return (
    <div className='flex py-80 flex-col'>
      <div className='text-center p-5 w-[85%] mx-auto'>
        <h1 className='text-4xl text-orange-800 font-bold'>The Meal Store</h1>
        <h3 className='text-lg text-[#F0BB78]'>Find your favorite recipe here</h3>
        <input onChange={handleSearch}
          type="text"
          placeholder="What's you want to cook today?"
          className="border border-amber-800 p-2 rounded mt-7 bg-white mr-2 w-[70%] max-w-md"
        />
        <button onClick={getAPI} className="bg-orange-600 mt-2.5 text-white px-4 py-2 rounded hover:bg-orange-700">
          Look & Cook
        </button>
      </div>
      <MealCard details={food}/>
    </div>
  )
}

export default HomePage