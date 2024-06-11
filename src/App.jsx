import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Inicio/Home';
import HomeLogged from './Pages/Inicio/HomeLogged';

function App() {
  const isLoggedIn = false; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomeLogged /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
