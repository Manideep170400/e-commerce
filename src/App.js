import './App.css';
import React from 'react';
import Center from './MainFolder/center';
import SideBar from './MainFolder/sideBar';
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
      <span class="material-symbols-outlined">
arrow_forward_ios
</span>
      </button>
      <Routes>
        <Route path="/center" element={<Center />} />
        <Route path="/center/sidebar" element={<SideBar />} />
      </Routes>
    </div>
  );
};

export default App;
