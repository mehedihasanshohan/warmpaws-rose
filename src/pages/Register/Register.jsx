import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import auth from '../../firebase/firebase.config';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
     .then(result => {
      console.log(result.user)
      setSuccess("Account Created Successfully");
      e.target.reset()
     })
     .catch(error => {
      console.log(error.message)
      setError(error.message)
     })
  }

  const handleTogglePasswordShow = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>

          <div className='relative'>
            <input type={showPassword ? 'text ': 'password'}
               name='password'
               className="input" placeholder="Password" />
            <button
               onClick={handleTogglePasswordShow}
               className='btn btn-xs top-2 right-6 absolute'>
                { showPassword ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
               </button>
          </div>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-info mt-4">Login</button>
        </fieldset>
        {
          success && (
          <p className='text-green-600'>{success}</p>
        )}
        {
          error && <p className='text-red-500'>{error}</p>
        }
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register