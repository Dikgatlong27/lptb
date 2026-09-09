import React from 'react'
import { SignupForm } from '../../components'

import './SignUp.css'

const SignUp = () => {
  return (
    <div id='signup'>
      <div className="signup-info">
        <h2>Welcome to LPTB Solutions</h2>
        <p>Create your account to build a quote and start a practical conversation about your website, app, or business system.</p>
      </div>
      <SignupForm />
    </div>
  )
}

export default SignUp
