import { createContext, useState, useEffect } from "react";
import { requestUserInfo } from "../api/users";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState( localStorage.getItem("token") || "" );
  const [user, setUser] = useState(null);

  function logOut() {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  }

  async function setRequestedUser() {
    const response = await requestUserInfo(token);
    if (response.error) {
      console.error(response.message)
      return
    }
    const foundUser = await response.user
    setUser(foundUser);
  }
  
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setRequestedUser();
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};