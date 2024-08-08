import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Tooltip from './Tooltip';
import axios from 'axios';
import './Register.css';

const pathServer = "https://tropical-server-9435d6950866.herokuapp.com";
const pathLocal = "http://localhost:5001";

const countryCodes = [
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+39', name: 'Italy' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+34', name: 'Spain' },
  { code: '+81', name: 'Japan' },
  { code: '+86', name: 'China' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  { code: '+55', name: 'Brazil' },
  { code: '+7', name: 'Russia' },
  { code: '+82', name: 'South Korea' },
  { code: '+47', name: 'Norway' },
  { code: '+46', name: 'Sweden' },
  { code: '+31', name: 'Netherlands' },
  { code: '+32', name: 'Belgium' },
  { code: '+41', name: 'Switzerland' },
  { code: '+48', name: 'Poland' },
  { code: '+30', name: 'Greece' },
  { code: '+20', name: 'Egypt' },
  { code: '+27', name: 'South Africa' },
  { code: '+52', name: 'Mexico' },
  { code: '+63', name: 'Philippines' },
  { code: '+90', name: 'Turkey' },
  { code: '+351', name: 'Portugal' },
  { code: '+353', name: 'Ireland' },
  { code: '+420', name: 'Czech Republic' },
  { code: '+43', name: 'Austria' },
  { code: '+45', name: 'Denmark' },
  { code: '+54', name: 'Argentina' },
  { code: '+60', name: 'Malaysia' },
  { code: '+62', name: 'Indonesia' },
  { code: '+64', name: 'New Zealand' },
  { code: '+65', name: 'Singapore' },
  { code: '+66', name: 'Thailand' },
  { code: '+98', name: 'Iran' },
  { code: '+961', name: 'Lebanon' },
  { code: '+962', name: 'Jordan' },
  { code: '+963', name: 'Syria' },
  { code: '+964', name: 'Iraq' },
  { code: '+965', name: 'Kuwait' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+972', name: 'Israel' },
  { code: '+975', name: 'Bhutan' },
  { code: '+976', name: 'Mongolia' },
  { code: '+977', name: 'Nepal' },
  { code: '+92', name: 'Pakistan' },
  { code: '+94', name: 'Sri Lanka' },
  { code: '+95', name: 'Myanmar' },
  { code: '+880', name: 'Bangladesh' },
  { code: '+856', name: 'Laos' },
  { code: '+84', name: 'Vietnam' },
  { code: '+62', name: 'Indonesia' },
  { code: '+673', name: 'Brunei' },
  { code: '+679', name: 'Fiji' },
  { code: '+675', name: 'Papua New Guinea' },
  { code: '+686', name: 'Kiribati' },
  { code: '+687', name: 'New Caledonia' },
  { code: '+689', name: 'French Polynesia' },
  { code: '+692', name: 'Marshall Islands' },
  { code: '+960', name: 'Maldives' },
  { code: '+961', name: 'Lebanon' },
  { code: '+962', name: 'Jordan' },
  { code: '+968', name: 'Oman' },
  { code: '+973', name: 'Bahrain' },
  { code: '+974', name: 'Qatar' },
  { code: '+975', name: 'Bhutan' },
  { code: '+992', name: 'Tajikistan' },
  { code: '+993', name: 'Turkmenistan' },
  { code: '+994', name: 'Azerbaijan' },
  { code: '+995', name: 'Georgia' },
  { code: '+996', name: 'Kyrgyzstan' },
  { code: '+998', name: 'Uzbekistan' }
];


function Register() {
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountType: 'client',
    countryCode: '+39',
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
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isEmailVerificationDisabled, setIsEmailVerificationDisabled] = useState(false);
  const [isPhoneVerificationDisabled, setIsPhoneVerificationDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
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

    if (!isPhoneVerified) {
      alert('Phone number not verified');
      return;
    }

    if (!isEmailVerified) {
      alert('Email not verified');
      return;
    }

    // Navigate to the appropriate form
    if (formData.accountType === 'client') {
      navigate('/register/client', { state: { formData } });
    } else {
      navigate('/register/freelancer', { state: { formData } });
    }
  };

  const sendPhoneCode = async () => {
    const fullPhoneNumber = formData.countryCode + formData.phoneNumber;
    try {
      await axios.post(pathServer + '/auth/send-phone-code', { phone: fullPhoneNumber });
      alert('Phone verification code sent');
    } catch (error) {
      console.error('Error sending phone verification code:', error);
      alert('Failed to send phone verification code');
    }
  };

  const verifyPhoneCode = async () => {
    const fullPhoneNumber = formData.countryCode + formData.phoneNumber;
    try {
      const response = await axios.post(pathServer + '/auth/verify-phone-code', {
        phone: fullPhoneNumber,
        code: formData.phoneVerificationCode
      });
      if (response.data.success) {
        setIsPhoneVerified(true);
        setIsPhoneVerificationDisabled(true);
        console.log('Phone number verified');
        alert('Phone number verified');
      } else {
        alert('Invalid phone verification code');
      }
    } catch (error) {
      console.error('Error verifying phone code:', error);
      alert('Failed to verify phone code');
    }
  };

  const sendEmailCode = async () => {
    try {
      await axios.post(pathServer + '/auth/send-email-code', { email: formData.email });
      alert('Email verification code sent');
    } catch (error) {
      console.error('Error sending email verification code:', error);
      alert('Failed to send email verification code');
    }
  };

  const verifyEmailCode = async () => {
    try {
      const response = await axios.post(pathServer + '/auth/verify-email-code', {
        email: formData.email,
        code: formData.emailVerificationCode
      });
      if (response.data.success) {
        setIsEmailVerified(true);
        setIsEmailVerificationDisabled(true);
        console.log('Email verified');
        alert('Email verified');
      } else {
        alert('Invalid email verification code');
      }
    } catch (error) {
      console.error('Error verifying email code:', error);
      alert('Failed to verify email code');
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
        <div className="input-group-inline">
          <select
            name="countryCode"
            className='select-country-code'
            value={formData.countryCode}
            onChange={handleChange}
            disabled={isPhoneVerified}
            required
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Número de Telefone"
            className={isPhoneVerified ? 'verified' : ''}
            disabled={isPhoneVerified}
            required
          />
          <button type="button" onClick={sendPhoneCode} disabled={isPhoneVerified}>Send Code</button>
        </div>
        <div className="input-group-inline">
          <input
            type="text"
            name="phoneVerificationCode"
            value={formData.phoneVerificationCode}
            onChange={handleChange}
            placeholder="Código de Verificação do Telefone"
            required
          />
          <button 
            type="button" 
            onClick={verifyPhoneCode} 
            disabled={isPhoneVerificationDisabled}
          >
            Verify Code
          </button>
        </div>
        <div className="input-group-inline">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className={isEmailVerified ? 'verified' : ''}
            disabled={isEmailVerified}
            required
          />
          <button type="button" onClick={sendEmailCode} disabled={isEmailVerified}>Send Code</button>
        </div>
        <div className="input-group-inline">
          <input
            type="text"
            name="emailVerificationCode"
            value={formData.emailVerificationCode}
            onChange={handleChange}
            placeholder="Código de Verificação do E-mail"
            required
          />
          <button 
            type="button" 
            onClick={verifyEmailCode} 
            disabled={isEmailVerificationDisabled}
          >
            Verify Code
          </button>
        </div>
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
