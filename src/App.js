import './App.css';
import React from 'react';
import Center from './MainFolder/center';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate(); 

  const handleToggle = () => {
    navigate('/center'); 
  };

  return (
    <div>
      <p>Hello World</p>
      <button onClick={handleToggle}>Go to Center
        <span>arrow</span>
      </button>
      <Routes>
        <Route path="/center" element={<Center />} />
        {/* <Route path="/label" element={<Center />} /> */}
      </Routes>
    </div>
  );
};

export default App;
