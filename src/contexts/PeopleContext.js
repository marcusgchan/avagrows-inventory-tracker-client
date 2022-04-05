import { createContext, useState, useContext } from "react";

const SelectedPerson = createContext({});

export default function useSelectedPerson() {
  return useContext(SelectedPerson);
}

export function SelectedPersonProvider({ children }) {
  const [selectedPerson, setSelectedPerson] = useState({});
  return (
    <SelectedPerson.Provider value={{ selectedPerson, setSelectedPerson }}>
      {children}
    </SelectedPerson.Provider>
  );
}
