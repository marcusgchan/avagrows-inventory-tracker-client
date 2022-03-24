export const partsTableHeadings = [
  { name: "internal_part_number", filterable: true },
  { name: "part_name", filterable: true },
  { name: "part_category_name", filterable: true },
  { name: "location_name", filterable: true },
  { name: "status_name", filterable: true },
  { name: "quantity", filterable: true },
  { name: "actions", filterable: false, type: "action" },
  { name: "total_quantity", filterable: true },
];
export const partsTableConfig = { uniqueIdProperty: "serial" };

export const statusHeadings = [
  { name: "status_id", filterable: true },
  { name: "status_name", filterable: true },
  { name: "notes", filterable: true },
  { name: "actions", filterable: false, type: "action" },
];
export const statusConfig = { uniqueIdProperty: "status_id" };

export const locationHeadings = [
  { name: "location_id", filterable: true },
  { name: "location_name", filterable: true },
  { name: "actions", filterable: false, type: "action" },
];
export const locationConfig = { uniqueIdProperty: "location_id" };
