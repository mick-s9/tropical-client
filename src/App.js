import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import RegisterFreelancer from './components/RegisterFreelancer';
import RegisterClient from './components/RegisterClient';
import Home from './components/Home';
import ComoFunciona from './components/ComoFunciona';
import Login from './components/Login';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logged" element={<PrivateRoute><div>User logged success</div></PrivateRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/freelancer" element={<RegisterFreelancer />} />
          <Route path="/register/client" element={<RegisterClient />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/login" element={<Login />} />
          {/* Default route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
