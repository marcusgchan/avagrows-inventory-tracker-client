import { createContext, useReducer, useContext } from "react";
import selectFunctionReducer, {
  DEFAULT_STATE,
} from "../reducers/selectedPersonReducer";

const SelectedPerson = createContext({});

export default function useSelectedPerson() {
  return useContext(SelectedPerson);
}

export function SelectedPersonProvider({ children }) {
  const [selectionState, selectionDispatch] = useReducer(
    selectFunctionReducer,
    DEFAULT_STATE
  );

  return (
    <SelectedPerson.Provider value={{ selectionState, selectionDispatch }}>
      {children}
    </SelectedPerson.Provider>
  );
}
