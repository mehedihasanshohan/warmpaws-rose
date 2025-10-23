import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router';
import auth from '../../firebase/firebase.config';

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = e => {
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

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('login successfully')
      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      })

  }


  const handleTogglePasswordShow = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className="card bg-base-100 m-auto mt-16 mb-16 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' autoComplete='off'
              className="input" placeholder="Email" />
          <label className="label">Password</label>

          <div className='relative'>
            <input type={showPassword ? 'text ': 'password'}
               name='password' autoComplete='off'
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
        <p>New to our website?<Link className='text-green-600 font-semibold ml-1' to='/register'>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login