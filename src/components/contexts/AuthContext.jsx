import React, { useEffect, useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        localStorage.setItem("roles", user.roles);
        localStorage.setItem("userEmail", user.userEmail);
      } catch (error) {}
    };
    fetchData();
  }, [user]);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};
