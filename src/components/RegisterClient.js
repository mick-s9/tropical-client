import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

axios.defaults.baseURL = 'http://localhost:5001'; // 

function RegisterClient() {
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { formData: initialFormData } = location.state || {};

  const [formData, setFormData] = useState({
    ...initialFormData,
    firstName: '',
    lastName: '',
    id: '',
    profileImage: '',
    profileTitle: '',
    description: ''
  });

  useEffect(() => {
    if (!initialFormData) {
      navigate('/register');
    }
  }, [initialFormData, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    console.log('Data sent to backend:', Object.fromEntries(data.entries()));

    try {
      const response = await axios.post('/auth/register/client', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response from backend:', response.data);

      setUserId(response.data.userId); // Assuming the backend returns the user ID
      alert('Client registration successful.');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === 'User already exists') {
        alert('User already exists');
      } else {
        console.error("Error during client registration:", error);
        alert('Error registering client: ' + error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <h1>Register Client</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Nome
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Apelido
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          ID
          <input type="text" name="id" value={formData.id} onChange={handleChange} required />
        </label>
        <label>
          Imagem de Perfil
          <input type="file" name="profileImage" onChange={handleChange} />
        </label>
        <label>
          Título do Perfil
          <input type="text" name="profileTitle" value={formData.profileTitle} onChange={handleChange} required />
        </label>
        <label>
          Descrição
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <button type="submit" className="register-button">Concluir</button>
      </form>
    </div>
  );
}

export default RegisterClient;
