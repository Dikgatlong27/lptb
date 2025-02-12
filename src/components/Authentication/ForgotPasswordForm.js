import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth/cordova' 
import { auth } from '../../Firebase'



const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess(true);
        } catch (err) {
            setError('Failed to send passworde reset email.');
        }

    };


  return (
    <div className='forgot-password-form'>
        {success ? (
            <div>
            <h3 style={{textAlign: 'center'}}>Password reset email sent!</h3>
            <p style={{textAlign: 'center', marginBottom: '15rem'}}>Please check your inbox to reset your password.</p>
            </div>
            ) : (
                <div className="login-container" style={{textAlign: 'center', marginBottom: '10rem'}}>
                <h3>Reset Your Password</h3>
                {error && <p className='error-message'>{error}</p>}
                <form onSubmit={handlePasswordReset}>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type='submit'>Send Reset Email</button>
                </form>
                </div>
            )}

        
    </div>
  )
}

export default ForgotPasswordForm
