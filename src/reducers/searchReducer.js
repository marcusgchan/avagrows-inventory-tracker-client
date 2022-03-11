import { SELECT_OPTIONS, DEFAULT_SEARCH_PARAMS } from "../configs/searchConfig";

export default function searchReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SEARCH_PARAMS":
      return {
        ...state,
        searchParam: action.payload,
        searchOption: "contains", // Default search option is contains
        searchTypeOptions: getSearchTypeOptions(action.payload),
      };
    case "UPDATE_SEARCH_TYPES":
      return {
        ...state,
        searchOption: action.payload,
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      throw new Error();
  }
}

function getSearchTypeOptions(payload) {
  const payloadType = DEFAULT_SEARCH_PARAMS.find(
    ({ value }) => payload === value
  ).type;
  if (payloadType !== "number" && payloadType !== "string")
    throw TypeError("Type must be number or string");
  return SELECT_OPTIONS[payloadType];
}

export const defaultState = {
  searchParam: "part name",
  searchOption: "contains",
  searchTypeOptions: getSearchTypeOptions("part name"),
  search: "",
};
