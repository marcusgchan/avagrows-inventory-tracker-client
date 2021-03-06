export const SELECT_OPTIONS = {
  number: ["contains", ">", "<"],
  string: ["contains"],
};

export const DEFAULT_SEARCH_PARAMS = [
  {
    columnName: "internal_part_number",
    value: "internal part number",
    type: "number",
  },
  { columnName: "part_name", value: "part name", type: "string" },
  { columnName: "quantity", value: "qty for loc, status", type: "number" },
  { columnName: "total_quantity", value: "total quantity", type: "number" },
];
