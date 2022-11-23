import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
