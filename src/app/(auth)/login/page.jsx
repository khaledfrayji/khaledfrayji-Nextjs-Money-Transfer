"use client";
import { useState, useEffect } from 'react';
import styles from '../auth.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const messageParam = urlParams.get('message');
    if (messageParam) {
      setMessage(messageParam);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Get cookies
    const emailCookie = document.cookie.split('; ').find(row => row.startsWith('email='));
    const passwordCookie = document.cookie.split('; ').find(row => row.startsWith('password='));

    const savedEmail = emailCookie ? emailCookie.split('=')[1] : null;
    const savedPassword = passwordCookie ? passwordCookie.split('=')[1] : null;

    // Validate credentials
    if (formData.email === savedEmail && formData.password === savedPassword) {
      // Set session storage for logged-in state
      sessionStorage.setItem('userEmail', savedEmail);

      // Redirect to get-started
      window.location.href = '/get-started';
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <>
   
     <div className={styles.container}>
     {message && <p className={styles.message}>{message}</p>}
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
       
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
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Login</button>
        <p className={styles.newAccount}>
          Don&apos;t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
    </>
   
  );
}
