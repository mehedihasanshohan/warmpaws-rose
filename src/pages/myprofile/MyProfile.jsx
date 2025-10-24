// // import React, { useContext } from "react";
// // import { useNavigate } from "react-router-dom";

// import { use } from "react";
// import { AuthContext } from "../../context/AuthContext.";

// const MyProfile = () => {
//   const {user} = use(AuthContext);
//   // const navigate = useNavigate();

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-[#536976]  to-[#292e49] px-4">
//       <div className="bg-sky-700/30  shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
//         <h2 className="text-2xl font-bold text-white mb-6">
//           My Profile
//         </h2>

//         <div className="flex justify-center mb-6 ">
//           <img
//             referrerpolicy="no-referrer"
//             src={
//               user?.photoURL ||
//               "https://cdn-icons-png.flaticon.com/512/847/847969.png"
//             }
//             alt="User"
//             className="w-28 h-28 rounded-full border-4 border-amber-400 object-cover shadow-md"
//           />
//         </div>

//         {/* User Info */}
//         <div className="text-left space-y-3">
//           <p className="text-amber-500">
//             <span className="font-semibold text-white">Name:</span>{" "}
//             {user?.displayName || "Not available"}
//           </p>
//           <p className="text-amber-500">
//             <span className="font-semibold text-white">Email:</span>{" "}
//             {user?.email || "Not available"}
//           </p>
//         </div>

//         <button
//           // onClick={() => navigate("/update-profile")}
//           className="mt-8 bg-blue-700 hover:bg-blue-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
//         >
//           Update Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;



import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.";
import { toast } from "react-toastify";

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
        toast.success("Profile updated successfully!");
        setIsOpen(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-[#536976] to-[#292e49] px-4">
      <div className="bg-sky-700/30 shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-white mb-6">My Profile</h2>

        <div className="flex justify-center mb-6">
          <img
            referrerPolicy="no-referrer"
            src={
              user?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-amber-400 object-cover shadow-md"
          />
        </div>

        {/* User Info */}
        <div className="text-left space-y-3">
          <p className="text-amber-500">
            <span className="font-semibold text-white">Name:</span>{" "}
            {user?.displayName || "Not available"}
          </p>
          <p className="text-amber-500">
            <span className="font-semibold text-white">Email:</span>{" "}
            {user?.email || "Not available"}
          </p>
        </div>

        {/* Update Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-8 bg-blue-700 hover:bg-blue-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Update Profile
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm">
          <div className="bg-sky-800 text-white rounded-2xl p-6 w-full max-w-sm shadow-lg relative">
            <h3 className="text-xl font-bold mb-4 text-center">Update Profile</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg text-amber-400 outline-none border border-gray-50"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Photo URL</label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg text-amber-400 outline-none border border-gray-50"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg cursor-pointer bg-gray-500 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
