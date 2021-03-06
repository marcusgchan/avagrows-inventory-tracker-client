import { SELECT_OPTIONS, DEFAULT_SEARCH_PARAMS } from "../configs/searchConfig";

export default function searchReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SEARCH_COLUMN":
      return {
        ...state,
        searchColumn: action.payload,
        searchOption: "contains", // Default search option is contains
        searchTypeOptions: getSearchTypeOptions(action.payload),
      };
    case "UPDATE_SEARCH_OPTION":
      return {
        ...state,
        searchOption: action.payload,
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: defaultState.search,
        searchColumn: defaultState.searchColumn,
        searchOption: defaultState.searchOption,
        searchTypeOptions: defaultState.searchTypeOptions,
      };
    default:
      throw new Error();
  }
}

function getSearchTypeOptions(payload) {
  const payloadType = DEFAULT_SEARCH_PARAMS.find(
    ({ columnName }) => payload === columnName
  ).type;
  if (payloadType !== "number" && payloadType !== "string")
    throw TypeError("Type must be number or string");
  return SELECT_OPTIONS[payloadType];
}

export const defaultState = {
  searchColumn: "part_name",
  searchOption: "contains",
  searchTypeOptions: getSearchTypeOptions("part_name"),
  search: "",
};
