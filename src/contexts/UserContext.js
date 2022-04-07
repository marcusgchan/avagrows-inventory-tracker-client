import { createContext, useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import userServices from "../services/userServices";
import peopleServices from "../services/peopleServices";
import useSelectedPerson from "./PeopleContext";

const UserContext = createContext({});

export default function useLogin() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { selectionDispatch } = useSelectedPerson();

  useEffect(() => {
    let ignore = false;

    if (location.pathname !== "/login") {
      userServices
        .getCurrentUser()
        .then((res) => {
          if (!ignore) {
            setUser(res.data);
            setTimeout(() => setLoading(false), 800);
          }
        })
        .then(() => {
          peopleServices
            .getPeople()
            .then((res) => {
              if (!ignore) {
                selectionDispatch({ type: "UPDATE_PEOPLE", payload: res.data });
              }
            })
            .catch((err) => console.error(err));
        })
        .catch((e) => {
          setUser({});
          setTimeout(() => setLoading(false), 800);
        });
      return () => (ignore = true);
    }
  }, [location, selectionDispatch]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
