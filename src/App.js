import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import RegisterFreelancer from './components/RegisterFreelancer';
import RegisterClient from './components/RegisterClient';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/freelancer" element={<RegisterFreelancer />} />
        <Route path="/register/client" element={<RegisterClient />} />
        {/* Default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
