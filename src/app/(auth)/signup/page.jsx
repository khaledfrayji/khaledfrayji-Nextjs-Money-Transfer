"use client";
import { useState } from 'react';
import styles from '../auth.module.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
    passwordVerify: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate password
    if (formData.password !== formData.passwordVerify) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 8 || !/\d/.test(formData.password)) {
      setError('Password must be at least 8 characters long and contain a number.');
      return;
    }

    // Save credentials to cookies
    document.cookie = `email=${formData.email}; path=/`;
    document.cookie = `password=${formData.password}; path=/`;

   
    window.location.href = '/login';
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          placeholder="Birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Verify Password"
          name="passwordVerify"
          value={formData.passwordVerify}
          onChange={handleChange}
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
