import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup
  function signup(email, password) {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  // Login
  function login(email, password) {
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  // Forgot Password
  function resetPassword(email) {
    return sendPasswordResetEmail(
      auth,
      email
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}