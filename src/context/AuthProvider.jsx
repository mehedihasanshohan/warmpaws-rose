import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext.'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
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
    signOutUser
  }

  return (
   <AuthContext value={authInfo}>
    {children}
   </AuthContext>
  )
}

export default AuthProvider