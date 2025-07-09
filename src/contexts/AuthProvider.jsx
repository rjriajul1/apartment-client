import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    console.log(user);
    
    // create a new user 
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user sign in with email and password
    const userSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user profile update 
    const userProfileUpdate = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }

    // user sing out 
    const userSignout = () => {
     return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
         setUser(currentUser)
         setLoading(false)
        })

        return () => {
            unSubscribe();
        }
        
    },[])

    const userInfo = {
        loading,
        createUser,
        userSignIn,
        userProfileUpdate,
        user,
        userSignout

    }
  return <AuthContext.Provider value={userInfo}>
        {children}
     </AuthContext.Provider>
};

export default AuthProvider
