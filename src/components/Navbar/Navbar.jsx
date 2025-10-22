import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { NavLink} from 'react-router'
import auth from '../../firebase/firebase.config';

  const googleProvider = new GoogleAuthProvider();


const Navbar = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      console.log(result.user);
      setUser(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleGoogleSignOut =() => {
    signOut(auth)
    .then( ()=> {
      alert('sign out')
      setUser(null)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-md dropdown-content bg-base-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink>My Profile</NavLink></li>
      </ul>
    </div>
    <a className="text-3xl font-semibold ml-2 text-teal-600">warmpaws rose</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-center items-center gap-4  font-semibold text-2xl px-1">
      <li className='hover:underline'><NavLink>Home</NavLink></li>
      <li className='hover:underline'><NavLink>Services</NavLink></li>
      <li className='hover:underline'><NavLink>My Profile</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <NavLink to='/profile'>My Profile</NavLink>
    <NavLink to='/login'>Login</NavLink>
    {user ? <NavLink onClick={handleGoogleSignOut}>Logout</NavLink> : <NavLink to='/register'>Register</NavLink>}
    <NavLink to='/login' onClick={handleGoogleSignIn}><button className='btn btn-info'>Google</button></NavLink>
  </div>
</div>
  )
}

export default Navbar