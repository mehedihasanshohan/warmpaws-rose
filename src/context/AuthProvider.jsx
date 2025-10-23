import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext.'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from '../firebase/firebase.config'

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])


  const authInfo = {
    user,
    createUser,
    logInUser,
    signOutUser
  }

  return (
   <AuthContext value={authInfo}>
    {children}
   </AuthContext>
  )
}

export default AuthProvider