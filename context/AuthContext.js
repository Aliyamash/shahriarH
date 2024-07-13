"use client";

import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getProducts = (user) => {
    setUser(user);
  };
  
  return (
    <AuthContext.Provider value={{ user, getProducts }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;