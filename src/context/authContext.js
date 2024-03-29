import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") )|| null
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const login = async ({ userName, password }) => {
    console.log(userName)
    const res = await axios.post(
      "http://localhost:3600/auth/login",
      { userName, password },
      {
     // withCredentials: true,//?    very danger  to use it!
      }
    );
    setCurrentUser(res.data.user);
    setToken(res.data.accessToken);
  };
  const logout = () => {

    setCurrentUser(null);
    setToken(null);
  };
   useEffect(() => {
     localStorage.setItem("user",JSON.stringify(currentUser));
   }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return(
     <AuthContext.Provider value={{currentUser, token, login, logout}}>

        {children}
    </AuthContext.Provider>

  )
};


//export default {AuthContext,AuthContextProvider};