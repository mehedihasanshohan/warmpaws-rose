import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.";
import { toast } from "react-toastify";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaUserEdit, FaEnvelope, FaUser, FaLink } from "react-icons/fa";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!user) return;

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully ✨");
        setIsOpen(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0f172a] overflow-hidden px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[40px] p-10 text-center">
          <h2 className="text-3xl font-black text-white mb-8 tracking-tight">My Profile</h2>

          {/* Avatar Section */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-20 animate-pulse"></div>
            <img
              referrerPolicy="no-referrer"
              src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
              alt="User"
              className="relative w-32 h-32 rounded-full border-4 border-white/10 object-cover shadow-2xl"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-4 text-left">
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-xl text-cyan-400">
                <FaUser />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Full Name</p>
                <p className="text-white font-medium">{user?.displayName || "Anonymous User"}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
              <div className="bg-amber-500/10 p-3 rounded-xl text-amber-400">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Address</p>
                <p className="text-white font-medium">{user?.email || "No Email Provided"}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-10 w-full group flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] font-black py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50 active:scale-95"
          >
            <FaUserEdit className="text-lg" />
            Update Profile
          </button>
        </div>
      </motion.div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-center items-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#1e293b] border border-white/10 p-8 rounded-[35px] w-full max-w-sm shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Edit Profile</h3>

              <form onSubmit={handleUpdate} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">Display Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-4 text-slate-500 text-sm" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 pl-11 pr-4 py-3.5 rounded-xl text-white outline-none focus:border-cyan-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">Photo URL</label>
                  <div className="relative">
                    <FaLink className="absolute left-4 top-4 text-slate-500 text-sm" />
                    <input
                      type="text"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 pl-11 pr-4 py-3.5 rounded-xl text-white outline-none focus:border-cyan-500 transition-all"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-4 rounded-xl font-bold bg-white/5 text-slate-300 hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-4 rounded-xl font-bold bg-cyan-500 text-[#0f172a] hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyProfile;