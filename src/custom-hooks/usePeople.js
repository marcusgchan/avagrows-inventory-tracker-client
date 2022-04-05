import { useState, useEffect } from "react";
import peopleServices from "../services/peopleServices";

// Gets the list of users from the server and sets the state
// This is for the user selection dropdown
function usePeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    peopleServices
      .getUsers()
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return people;
}

export default usePeople;
