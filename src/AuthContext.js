import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (...args) => (await import('./authClient')).signup(...args);

  const login = async (...args) => (await import('./authClient')).login(...args);

  const logout = async () => (await import('./authClient')).logout();

  useEffect(() => {
    let active = true;
    let unsubscribe;
    import('./authClient')
      .then((client) => {
        if (!active) return;
        unsubscribe = client.subscribe((user) => {
          setCurrentUser(user);
          setLoading(false);
        });
      })
      .catch((error) => {
        if (!active) return;
        console.error('Unable to initialize authentication:', error);
        setLoading(false);
      });

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
