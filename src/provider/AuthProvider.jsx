import { useEffect, useState } from "react";
import {

  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";


import { GoogleAuthProvider } from "firebase/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import auth from "@/firebase/firebase.config";
import AuthContext from "./AuthContext";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    toast.success("Logout Successful");
    signOut(auth).then(() => {});
  };
  const update = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user in the auth state changed", currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("https://suggestly-server.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then(() => {
            // console.log("login token", res.data);
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://suggestly-server.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then(() => {
            // console.log("logout", res.data);
            setUser(currentUser);
            setLoading(false);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    update,
    googleSignIn,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
