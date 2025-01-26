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
          .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log("login token", res.data);
            const userStatus = res.data.status;
            console.log(res);
            if (userStatus === "fired") {
              toast.error("Your account has been disabled");
              setLoading(false);
              setUser(null);
              logOut();
              
            } else {
              setUser(currentUser);
              setLoading(false);
            }
          })
          .catch((err) => {
            console.error("Error during JWT issuance:", err);
            toast.error("An error occurred while verifying your account.");
            setUser(null);
            setLoading(false);
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/logout`,
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
