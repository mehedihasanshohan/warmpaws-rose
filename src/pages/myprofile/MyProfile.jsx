// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  // const navigate = useNavigate();
  const user = 'shohan';

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Profile
        </h2>

        {/* User Image */}
        <div className="flex justify-center mb-6">
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
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Name:</span>{" "}
            {user?.displayName || "Anonymous"}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            {user?.email || "Not available"}
          </p>
        </div>

        {/* Update Profile Button */}
        <button
          // onClick={() => navigate("/update-profile")}
          className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
