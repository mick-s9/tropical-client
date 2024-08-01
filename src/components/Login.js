import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });

    try {
      const response = await axios.post('http://localhost:5001/auth/login', {
        email,
        password,
      });
      console.log('Response from server:', response.data);

      if (response.data.success) {
        setMessage('Login successful');
        login(response.data.token);
        navigate('/');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Error during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Next</button>
        </form>
        <p>
          New user? <a href="/register">Create a new account</a>
        </p>
        <p>
          Forgot password? <a href="/recover">Recover</a>
        </p>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
