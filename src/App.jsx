import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Recipe from './Components/Recipe';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:mealid" element={<Recipe />} />
    </Routes>
  );
};

export default App;
