import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './Register.css';

function Register() {
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountType: 'client',
    phoneNumber: '',
    phoneVerificationCode: '123',
    email: '',
    emailVerificationCode: 'asd',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    address: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (formData.email !== formData.email) {
      alert('Emails do not match');
      return;
    }
    if (!formData.termsAccepted) {
      alert('You must accept the terms of service');
      return;
    }

    // Here we just navigate to the appropriate form
    if (formData.accountType === 'client') {
      navigate('/register/client', { state: { formData } });
    } else {
      navigate('/register/freelancer', { state: { formData } });
    }
  };

  return (
    <div className="register-container">
      <h1>Bem-vindo ao</h1>
      <h2>TugaFreela</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="account-type">
          <label>
            <input
              type="radio"
              name="accountType"
              value="client"
              checked={formData.accountType === 'client'}
              onChange={handleChange}
            />
            Cliente
          </label>
          <label>
            <input
              type="radio"
              name="accountType"
              value="freelancer"
              checked={formData.accountType === 'freelancer'}
              onChange={handleChange}
            />
            Freelancer
          </label>
        </div>
        <label>
          Número de Telefone
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Código de Verificação do Telefone
          <input type="text" name="phoneVerificationCode" value={formData.phoneVerificationCode} onChange={handleChange} required />
        </label>
        <label>
          E-mail
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Código de Verificação do E-mail
          <input type="text" name="emailVerificationCode" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Senha
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Confirmar Senha
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
        <label>
          Data de Nascimento
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <label>
          Endereço Completo
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label className="terms">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          Aceito os <a href="#">Termos de Serviço</a>
        </label>
        <button type="submit" className="register-button">Cadastrar</button>
        <p>New user? <a href="#">Create a new account</a></p>
      </form>
    </div>
  );
}

export default Register;
