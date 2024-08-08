import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './ResetPassword.css'; // Assicurati di creare il file CSS

const pathServer = "https://tropical-server-9435d6950866.herokuapp.com";
// const pathLocal = "http://localhost:5001";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post(pathServer + '/auth/reset-password', { token, newPassword });
      alert('Password reset successful');
    } catch (error) {
      alert('Error resetting password');
    }
  };

  return (
    <div className="reset-password">
      <h2>Create your new password!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Password
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
