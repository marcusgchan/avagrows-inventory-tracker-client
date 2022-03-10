export const SELECT_OPTIONS = {
  number: ["contains", ">", "<"],
  string: ["contains"],
};

export const DEFAULT_SEARCH_PARAMS = [
  { value: "internal part number", type: "number" },
  { value: "part name", type: "string" },
  { value: "qty for loc, status", type: "number" },
];
