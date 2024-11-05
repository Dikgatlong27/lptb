// src/AuthContext.js
import React, { useContext, useState, useEffect } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"; // Named imports

// Create context
const AuthContext = React.createContext();

// Export useAuth custom hook for easier use
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register new users
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password); // Use named import function
  };

  // Log in users
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); // Use named import function
  };

  // Log out users
  const logout = () => {
    return signOut(auth); // Use named import function
  };

  // Effect to keep track of the user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Cleanup the listener
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
