import React from 'react'
import { SignupForm } from '../../components'

import './SignUp.css'

const SignUp = () => {
  return (
    <div id='signup'>
      <div className="signup-info">
        <h2>Welcome to LPTB Solutions</h2>
        <p>Create your account and start building with us! We provide high-quality web and mobile solutions tailored to your business needs.</p>
      </div>
      <SignupForm />
    </div>
  )
}

export default SignUp
