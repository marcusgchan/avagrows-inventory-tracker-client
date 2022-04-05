import { createContext, useState, useContext } from "react";

const SelectedPerson = createContext({});

export default function useSelectedPerson() {
  return useContext(SelectedPerson);
}

export function SelectedPersonProvider({ children }) {
  const [selectedPerson, setSelectedPerson] = useState({});

  function handleSelection(e, people) {
    const personArray = people.filter(({ user_id }) => {
      return user_id === Number(e.target.value);
    });
    const person = personArray[0] || {};
    setSelectedPerson(person);
  }

  return (
    <SelectedPerson.Provider value={{ selectedPerson, handleSelection }}>
      {children}
    </SelectedPerson.Provider>
  );
}
