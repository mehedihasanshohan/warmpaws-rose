import { GoogleAuthProvider } from 'firebase/auth'
import React, { use} from 'react'
import { NavLink} from 'react-router'
// import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthContext.';

const Navbar = () => {
  const {user, signOutUser} = use(AuthContext);
  // const photoUrl  = user.photoURL;
  console.log(user);

  const handleGoogleSignOut =() => {
    signOutUser()
    .then( ()=> {

    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
   <div className="navbar bg-base-100 shadow-sm  bg-linear-to-r from-teal-600 via-teal-700 to-teal-600">
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
    <a className="text-3xl font-semibold text-white ml-2 animate__animated animate__rollIn">warmpaws rose</a>
  </div>
  <div className="navbar-center hidden lg:flex animate__animated animate__fadeInLeft" >
    <ul className="flex justify-center items-center gap-4 text-white  font-semibold text-2xl px-1">
      <li className='hover:underline'><NavLink>Home</NavLink></li>
      <li className='hover:underline'><NavLink to='/services'>Services</NavLink></li>
      <li className='hover:underline'><NavLink to='/my-profile'>My Profile</NavLink></li>
    </ul>
  </div>
  {/* <div className="navbar-end text-white flex gap-2 animate__animated animate__fadeInRight">

    {
      user &&   <img src={user.photoURL} data-tip={'shohan'} className='h-8 rounded-full tooltip tooltip-bottom' alt="" />
    }
    {user ? <NavLink onClick={handleGoogleSignOut}>Logout</NavLink> : <NavLink to='/register'>Register</NavLink>}
  </div> */}

  <div className="navbar-end text-white flex items-center gap-3 animate__animated animate__fadeInRight">
  {user && (
    <div className="tooltip tooltip-left" data-tip={user.displayName || "User"}>
      <img
        src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
        alt="User Avatar"
        className="h-9 w-9 rounded-full border border-white cursor-pointer"
      />
    </div>
  )}

  {user ? (
    <button
      onClick={handleGoogleSignOut}
      className="btn btn-sm bg-red-400 hover:bg-red-300 text-white border-none transition-all duration-300"
    >
      Logout
    </button>
  ) : (
    <NavLink
      to="/register"
      className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none transition-all duration-300"
    >
      Register
    </NavLink>
  )}
</div>


</div>
  )
}

export default Navbar