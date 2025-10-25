import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext.'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile } from 'firebase/auth'
import auth from '../firebase/firebase.config'

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }


    const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) return;

    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });

      setLoading(false);
      return Promise.resolve();
    } catch (error) {
      setLoading(false);
      return Promise.reject(error);
    }
  };


  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])


  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    signInWithGoogle,
    updateUserProfile,
    signOutUser
  }

  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider