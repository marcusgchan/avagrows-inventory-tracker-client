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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/login") {
      userServices
        .getCurrentUser()
        .then((res) => {
          setUser(res.data);
          setTimeout(() => setLoading(false), 800);
        })
        .catch((e) => {
          setUser({});
          setTimeout(() => setLoading(false), 800);
        });
    }
  }, [location]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
