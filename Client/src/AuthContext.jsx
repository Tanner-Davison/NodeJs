import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//eslint-disable-next-line
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleContextLogin = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const handleContextLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, handleContextLogin, handleContextLogout }}>
      {children}
    </AuthContext.Provider>
  );
};