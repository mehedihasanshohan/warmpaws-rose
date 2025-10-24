// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { use } from "react";
import { AuthContext } from "../../context/AuthContext.";

const MyProfile = () => {
  const {user} = use(AuthContext);
  // const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-[#536976]  to-[#292e49] px-4">
      <div className="bg-sky-700/30  shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          My Profile
        </h2>

        <div className="flex justify-center mb-6 ">
          <img
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

        <button
          // onClick={() => navigate("/update-profile")}
          className="mt-8 bg-blue-700 hover:bg-blue-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
