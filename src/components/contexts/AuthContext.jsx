import React, { useEffect, useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    token: "",
    roles: [],
    userEmail: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUserInfo({
          token: localStorage.getItem("token"),
          roles: localStorage.getItem("roles"),
          userEmail: localStorage.getItem("userEmail"),
        });
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </AuthContext.Provider>
  );
};
