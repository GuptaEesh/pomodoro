import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const initialData = {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
  };
  const [authToken, setAuthToken] = useState(initialData);
  const navigate = useNavigate();

  const isAuthenticated = authToken.token ? true : false;
  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.loggedUser);
    setAuthToken({ token: data.token, user: data.loggedUser });
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken({ token: null, user: null });
    navigate("/signin");
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        token: authToken.token,
        user: authToken.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
