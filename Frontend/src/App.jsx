import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import "./assets/css/styles.css";
import "./assets/css/responsive.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes like /products, /cart, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
