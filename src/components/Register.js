import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Tooltip from './Tooltip';
import './Register.css';

function Register() {
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountType: 'client',
    phoneNumber: '',
    phoneVerificationCode: '',
    email: '',
    emailVerificationCode: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    address: '',
    termsAccepted: false
  });

  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validatePassword = (password) => {
    // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // return passwordRegex.test(password);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!validatePassword(formData.password)) {
      alert('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.');
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
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Número de Telefone"
          required
        />
        <input
          type="text"
          name="phoneVerificationCode"
          value={formData.phoneVerificationCode}
          onChange={handleChange}
          placeholder="Código de Verificação do Telefone"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          name="emailVerificationCode"
          value={formData.emailVerificationCode}
          onChange={handleChange}
          placeholder="Código de Verificação do E-mail"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          placeholder="Senha"
          required
        />
        {showTooltip && (
          <Tooltip message="A senha deve ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, um número e um caractere especial." />
        )}
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar Senha"
          required
        />
        <label htmlFor="dateOfBirth" className="date-label">
          Data de Nascimento
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="date-input"
            required
          />
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Endereço Completo"
          required
        />
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
