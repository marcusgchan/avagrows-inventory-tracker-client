import { createContext, useEffect, useState } from "react";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    userServices
      .getCurrentUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
