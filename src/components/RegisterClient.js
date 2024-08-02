import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './RegisterClient.css';

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

  const handleButtonClick = () => {
    document.getElementById('profileImage').click();
  };

  return (
    <div className="register-container">
      <h1>Register Client</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          placeholder="Nome" 
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          placeholder="Apelido" 
          required 
        />
        <input 
          type="text" 
          name="id" 
          value={formData.id} 
          onChange={handleChange} 
          placeholder="ID" 
          required 
        />

        <div className="photo-section">
          <div className="photo-icon">
            <img src={"https://s3-alpha-sig.figma.com/img/8514/e653/da09d97df7431de89bd4517a78bad424?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hudzJ1tSUWM70EZjT21Di2QrXz-LN9dEl8ohsu72XYlhU50rtIg8QOS5Ba41In~hj~mE2IMdxeDxiTkX33U0bPTbjfkSNUG9DnigqshqiKbCTJDMxvvxTyDmgYkvoYR-V9yfcm0oVxD0OtkVfQIqq65pkMrxYINES~FXu6zHAy0F1u795~ljL7KiRmLQP~R4FV6bWb5ODI5ZzUq92xE1pNeiX2R7oFMwohzue5vSdH~7jqo6eSPQCjxVDJd7Dx5Q6ml3YKJioa3YxNibC7rzQMS~afg1ufSzLzMfpeNRgVxX~yKSj0V~eq7OUzoxnB8HHlHOO2REvmw34R36zHi97Q__"} alt="Camera Icon" />
          </div>
          <button type="button" onClick={handleButtonClick} className="add-photo-button">
            Adicionar Foto
          </button>
          <input 
            type="file" 
            name="profileImage" 
            id="profileImage" 
            onChange={handleChange} 
            style={{ display: 'none' }}
          />
        </div>

        <input 
          type="text" 
          name="profileTitle" 
          value={formData.profileTitle} 
          onChange={handleChange} 
          placeholder="Título do Perfil" 
          required 
        />
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          placeholder="Descrição" 
          required 
          className="description-textarea"
        />
        <button type="submit" className="register-button">Concluir</button>
      </form>
    </div>
  );
}

export default RegisterClient;
