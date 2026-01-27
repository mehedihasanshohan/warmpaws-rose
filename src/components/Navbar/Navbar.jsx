import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext.";
import { toast } from "react-toastify";
import { FaPaw } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleGoogleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signed out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-bold bg-white/5 rounded-xl underline decoration-cyan-400 decoration-2 underline-offset-8"
      : "hover:text-cyan-400 transition-all duration-300";

  const navLinks = (
    <>
      <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
      <li><NavLink to="/services" className={linkStyle}>Services</NavLink></li>
      <li><NavLink to="/my-profile" className={linkStyle}>My Profile</NavLink></li>
    </>
  );

  return (
    <div className="sticky top-0 z-100 px-4 py-3">
      {/* Floating Glass Container */}
      <div className="navbar max-w-7xl mx-auto rounded-[30px] border border-white/10 bg-[#0f172a]/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] px-6 transition-all duration-500 hover:border-white/20">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-white/10 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-50 p-4 shadow-2xl bg-[#0f172a]/95 backdrop-blur-2xl rounded-3xl w-60 border border-white/10 text-white gap-3 leading-loose">
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 group transition-all ml-2 md:ml-0">
            <div className="bg-cyan-500/20 p-2 rounded-xl group-hover:bg-cyan-500 group-hover:rotate-360 transition-all duration-700">
              <FaPaw className="text-cyan-400 group-hover:text-[#0f172a] text-xl" />
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase italic hidden sm:block">
              WarmPaws
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white gap-8 font-medium tracking-wide">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-4">
          {user && (
            <div className="tooltip tooltip-bottom before:bg-cyan-600 before:text-white" data-tip={user.displayName || "User"}>
              <div className="avatar">
                <div className="w-10 h-10 rounded-full ring-2 ring-cyan-500/50 ring-offset-4 ring-offset-[#0f172a] hover:ring-cyan-400 transition-all cursor-pointer">
                  <img
                    src={user.photoURL || "https://i.ibb.co.com/LzzpgV0z/icons8-person-94.png"}
                    alt="User"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {user ? (
            <button
              onClick={handleGoogleSignOut}
              className="btn btn-sm rounded-2xl bg-linear-to-r from-red-500/20 to-red-600/20 border border-red-500/40 text-red-400 hover:from-red-500 hover:to-red-600 hover:text-white transition-all duration-300 px-6 font-bold"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" className="btn btn-sm rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] border-none px-6 font-bold shadow-lg shadow-cyan-500/20 transition-all active:scale-95">
                Login
              </Link>
              <Link to="/register" className="btn btn-sm rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 px-6 hidden sm:flex font-bold transition-all">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;