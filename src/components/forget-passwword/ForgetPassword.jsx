import { useLocation } from "react-router";
import { useState } from "react";
// import { sendPasswordResetEmail } from "firebase/auth";
// import auth from "../../firebase/firebase.config";

const ForgetPassword = () => {
  const location = useLocation();

  // get email from login page if available
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);
  // const [message, setMessage] = useState("");
  console.log(initialEmail);
  // const handleResetPassword = (e) => {
  //   e.preventDefault();
  //   if (!email) {
  //     setMessage("Please enter your email.");
  //     return;
  //   }

  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       setMessage("Password reset email sent! Check your inbox.");
  //       setTimeout(() => {
  //         // optional: redirect to Gmail or login page
  //         window.location.href = "https://mail.google.com";
  //       }, 1500);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // };

  return (
    <div className="card bg-base-100 m-auto mt-16 mb-16 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold mb-3">Reset Password</h1>

        <form>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button className="btn btn-info mt-4">Reset Password</button>
        </form>

        {/* {message && <p className="mt-2 text-green-600">{message}</p>} */}
      </div>
    </div>
  );
};

export default ForgetPassword;
