import React from 'react';
import { NavLink } from 'react-router-dom';

const MealCard = ({ details }) => {
  return (
    <div className='w-full p-10 flex gap-7 flex-wrap justify-center'>
      {!details || details.length === 0 ? (
        <p className="text-lg font-semibold text-red-500">No recipes found</p>
      ) : (
        details.map((meal) => (
          <div key={meal.idMeal} className='bg-[#FFF0DC] rounded-xl w-64 h-[385px] relative shadow-lg'>
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
              className='w-full h-60 rounded-t-xl object-cover'
            />
            <h1 className='text-xl text-center px-2.5 py-3 font-bold text-gray-800 text-wrap'>
              {meal.strMeal}
            </h1>
            <NavLink to={`/${meal.idMeal}`}>
              <button className='cursor-pointer text-lg text-center px-4 py-2 rounded-md absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white hover:bg-orange-700'>
                View Recipe
              </button>
            </NavLink>
          </div>
        ))
      )}
    </div>
  );
};

export default MealCard;
