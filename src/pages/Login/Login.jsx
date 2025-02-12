import React, { useState } from 'react' 

import { LoginForm, ForgotPasswordForm } from '../../components'
import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Track if Forgot Password form is shown


  const toggleForgotPassword = () => {
    setIsForgotPassword((prev) => !prev); // Toggle between login and forgot password form
  };

  return (
    <div id='login'>
      <div className="login-info">
        <h2>Welcome Back!</h2>
        <p>Log in to manage your projects, collaborate with our team, and stay updated on your software solutions.</p>
      </div>

      {/* If Forgot Password is toggled, show the ForgotPasswordForm */}
      {isForgotPassword ? (
        <ForgotPasswordForm />
      ) : (

       <>    
      <LoginForm />
      
      <div className="login-footer">
        <p>
          <button onClick={toggleForgotPassword}>Forgot Password?</button>
        </p>
        <p>New here? <Link to="/signup">Create an account</Link></p>
      </div>
</> 
    )}
      
    </div>
  )
}

export default Login
