import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!termsAccepted) {
      setError('Please agree to the website terms before creating an account.');
      return;
    }
    setSubmitting(true);

    try {
      await signup(email, password, name);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      console.error('signup error', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="name"
          aria-label="Full name"
          placeholder="Enter Your Full Names"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          aria-label="Email address"
          autoComplete="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          aria-label="Password"
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className="account-legal account-agreement">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(event) => setTermsAccepted(event.target.checked)}
            required
          />
          <span>
            I agree to the{' '}
            <Link to="/terms" target="_blank" rel="noopener noreferrer">
              website terms
            </Link>
            .
          </span>
        </label>
        <p className="account-legal">
          Read our{' '}
          <Link to="/privacy" target="_blank" rel="noopener noreferrer">
            privacy notice
          </Link>{' '}
          to understand how we use your account and quotation details. Optional analytics
          is a separate choice.
        </p>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Creating account…' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
