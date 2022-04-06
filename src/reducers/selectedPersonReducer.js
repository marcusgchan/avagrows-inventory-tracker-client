// Manages the state of the current selected person and the dropdown menu
export default function selectFunctionReducer(state, action) {
  switch (action.type) {
    case "SELECT_PERSON":
      const personArray = state.people.filter(({ user_id }) => {
        return user_id === Number(action.payload);
      });
      const person = personArray[0] || {};
      return {
        ...state,
        selectedPerson: person,
      };
    case "UPDATE_PEOPLE":
      return {
        ...state,
        people: action.payload,
      };

    case "REMOVE_PERSON": {
      const currentSelectedPerson = state.selectedPerson;
      const userDeletedCurrentSelectedUser =
        currentSelectedPerson.user_id === action.payload;

      if (userDeletedCurrentSelectedUser) {
        return {
          ...state,
          people: state.people.filter(({ user_id }) => {
            return user_id !== action.payload;
          }),
          selectedPerson: {},
        };
      }

      return {
        ...state,
        people: state.people.filter(
          (person) => person.user_id !== action.payload
        ),
      };
    }
    case "EDIT_PERSON": {
      const currentSelectedPerson = state.selectedPerson;
      const currentSelectedPersonIsEdited = action.payload.some(
        ({ name }) => name !== currentSelectedPerson.name
      );
      const updatedPerson = action.payload.find(
        ({ user_id }) => user_id === currentSelectedPerson.user_id
      );

      // User edits the current select user (user edits itself)
      if (currentSelectedPersonIsEdited) {
        return {
          ...state,
          people: action.payload,
          selectedPerson: updatedPerson,
        };
      }

      return {
        ...state,
        people: action.payload,
      };
    }
    default:
      return state;
  }
}

export const DEFAULT_STATE = {
  people: [],
  selectedPerson: {},
};
