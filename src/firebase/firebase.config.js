



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANwmDofvSod5zV7OjQJpJoolZgmqq8Xpg",
  authDomain: "warmpaws-rose.firebaseapp.com",
  projectId: "warmpaws-rose",
  storageBucket: "warmpaws-rose.firebasestorage.app",
  messagingSenderId: "815780984489",
  appId: "1:815780984489:web:a8c40d55eccb9b28589bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;