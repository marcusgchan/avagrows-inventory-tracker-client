export const partsTableHeadings = [
  { name: "internal_part_number", sortable: true },
  { name: "part_name", sortable: true },
  { name: "part_category_name", sortable: true },
  { name: "location_name", sortable: true },
  { name: "status_name", sortable: true },
  { name: "quantity", sortable: true },
  { name: "actions", sortable: false, type: "action" },
  { name: "total_quantity", sortable: true },
];
export const partsTableConfig = { uniqueIdProperty: "serial" };

export const statusHeadings = [
  { name: "status_id", sortable: true },
  { name: "status_name", sortable: true },
  { name: "note", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const statusConfig = { uniqueIdProperty: "status_id" };

export const locationHeadings = [
  { name: "location_id", sortable: true },
  { name: "location_name", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const locationConfig = { uniqueIdProperty: "location_id" };

export const usersHeadings = [
  { name: "user_id", sortable: true },
  { name: "name", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const usersConfig = { uniqueIdProperty: "user_id" };

export const partsHeadings = [
  { name: "internal_part_number", sortable: true },
  { name: "part_name", sortable: true },
  { name: "part_description", sortable: true },
  { name: "unit_price", sortable: true },
  { name: "line_price", sortable: true },
  { name: "lead_time", sortable: true },
  { name: "total_quantity", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const partsConfig = { uniqueIdProperty: "internal_part_number" };

export const partCategoryHeadings = [
  { name: "part_category_id", sortable: true },
  { name: "part_id", sortable: true },
  { name: "part_category_name", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const partCategoryConfig = { uniqueIdProperty: "part_id" };
