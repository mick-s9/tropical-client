import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import RegisterFreelancer from './components/RegisterFreelancer';
import RegisterClient from './components/RegisterClient';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/register/freelancer" element={<RegisterFreelancer />} />
        <Route path="/register/client" element={<RegisterClient />} />
        {/* Default route */}
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </div>
  );
}

export default App;
