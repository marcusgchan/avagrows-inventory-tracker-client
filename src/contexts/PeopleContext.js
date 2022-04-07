import { createContext, useEffect, useReducer, useContext } from "react";
import selectFunctionReducer, {
  DEFAULT_STATE,
} from "../reducers/selectedPersonReducer";
import peopleServices from "../services/peopleServices";

const SelectedPerson = createContext({});

export default function useSelectedPerson() {
  return useContext(SelectedPerson);
}

export function SelectedPersonProvider({ children }) {
  const [selectionState, selectionDispatch] = useReducer(
    selectFunctionReducer,
    DEFAULT_STATE
  );

  useEffect(() => {
    peopleServices
      .getPeople()
      .then((res) =>
        selectionDispatch({ type: "UPDATE_PEOPLE", payload: res.data })
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <SelectedPerson.Provider value={{ selectionState, selectionDispatch }}>
      {children}
    </SelectedPerson.Provider>
  );
}
