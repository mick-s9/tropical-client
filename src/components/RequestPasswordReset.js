import React, { useState } from 'react';
import axios from 'axios';
import './RequestPasswordReset.css'; // Assicurati di creare il file CSS

const pathServer = "https://tropical-server-9435d6950866.herokuapp.com";
const pathLocal = "http://localhost:5001";

const RequestPasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(pathServer + '/auth/request-password-reset', { email });
      alert('Password reset email sent');
    } catch (error) {
      alert('Error sending email');
    }
  };

  return (
    <div className="request-password-reset">
      <h2>Esqueceu a senha?</h2>
      <p>Não tem problema. Nós te ajudamos!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Insira o email de registro
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RequestPasswordReset;
