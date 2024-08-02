import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './RegisterFreelancer.css';


const pathServer = "https://tropical-server-9435d6950866.herokuapp.com";
const pathLocal = "http://localhost:5001";

function RegisterFreelancer() {
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { formData: initialFormData } = location.state || {};

  const [formData, setFormData] = useState({
    ...initialFormData,
    firstName: '',
    lastName: '',
    nif: '',
    profileImage: '',
    profileTitle: '',
    description: '',
    citizenCard: '',
    hourlyRate: '',
    categories: '',
    subcategories: ''
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

  const handleButtonClick = () => {
    document.getElementById('profileImage').click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    console.log('Data sent to backend:', Object.fromEntries(data.entries()));

    try {
      const response = await axios.post(pathServer + '/auth/register/freelancer', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response from backend:', response.data);

      setUserId(response.data.userId); // Assuming the backend returns the user ID
      alert('Freelancer registration successful.');
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === 'User already exists') {
        alert('User already exists');
      } else {
        console.error("Error during freelancer registration:", error);
        alert('Error registering freelancer: ' + error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <h1>Register Freelancer</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          <input type="text" name="firstName" placeholder="Nome" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          <input type="text" name="lastName" placeholder="Apelido" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          <input type="text" name="nif" placeholder="NIF" value={formData.nif} onChange={handleChange} required />
        </label>
        <label>
          <input type="text" name="citizenCard" placeholder="Cartão Cidadão" value={formData.citizenCard} onChange={handleChange} required />
        </label>
        <label>
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
        </label>
        <label>
          <input type="text" name="profileTitle" placeholder="Título do Perfil" value={formData.profileTitle} onChange={handleChange} required />
        </label>
        <label>
          <textarea name="description" className='description-freelancer' placeholder="Descrição" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          <input type="number" name="hourlyRate" placeholder="Taxa por Hora" value={formData.hourlyRate} onChange={handleChange} required />
        </label>
        <label>
          <input type="text" name="categories" placeholder="Categorias" value={formData.categories} onChange={handleChange} required />
        </label>
        <label>
          <input type="text" name="subcategories" placeholder="Subcategorias" value={formData.subcategories} onChange={handleChange} required />
        </label>
        <button type="submit" className="register-button">Concluir</button>
      </form>
    </div>
  );
}

export default RegisterFreelancer;
