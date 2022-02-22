import { createContext, useEffect, useState } from "react";
import userServices from "../services/userServices";

export const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

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
