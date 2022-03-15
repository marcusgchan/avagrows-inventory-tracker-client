import { createContext, useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import userServices from "../services/userServices";

const UserContext = createContext({});

export default function useLogin() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/login") {
      userServices
        .getCurrentUser()
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => {
          setUser({});
        });
    }
  }, [location]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
