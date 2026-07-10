// src/components/Authentication/LoginForm.js

import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      await login(email.trim(), password);

      const pendingQuote = localStorage.getItem('pendingQuote');

      /*
       * If the user came from the quotation page,
       * or a quotation draft exists, return them
       * to the quotation page after login.
       */
      if (pendingQuote || location.state?.from === '/quotation') {
        navigate('/quotation?resume=true', {
          replace: true,
        });

        return;
      }

      /*
       * Normal login that did not begin from
       * the quotation page.
       */
      navigate('/dashboard', {
        replace: true,
      });
    } catch (loginError) {
      console.error('Login failed:', loginError);

      switch (loginError.code) {
        case 'auth/invalid-credential':
          setError('The email address or password is incorrect.');
          break;

        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;

        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;

        case 'auth/too-many-requests':
          setError('Too many login attempts. Please wait and try again.');
          break;

        case 'auth/network-request-failed':
          setError(
            'Network error. Check your internet connection and try again.',
          );
          break;

        default:
          setError('Failed to log in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {location.state?.message && (
        <p className="login-message">{location.state.message}</p>
      )}

      {error && <p className="login-error">{error}</p>}

      <form onSubmit={handleSubmit} name="loginForm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
