export const partsTableHeadings = [
  {
    field: "internal_part_number",
    headerName: "Interal Part Number",
    sortable: true,
    width: 200,
  },
  { field: "part_name", headerName: "Part Name", sortable: true, width: 140 },
  {
    field: "part_category_name",
    headerName: "Part Category Name",
    sortable: true,
    width: 200,
  },
  {
    field: "location_name",
    headerName: "Location Name",
    sortable: true,
    width: 120,
  },
  {
    field: "status_name",
    headerName: "Status Name",
    sortable: true,
    width: 120,
  },
  { field: "quantity", headerName: "Quantity", sortable: true, width: 100 },
  {
    field: "action",
    headerName: "Actions",
    sortable: false,
    width: 140,
    renderCell: () => {
      return (
        <>
          <button
            onClick={() => {
              console.log("eyess");
            }}
          >
            dsaasdf
          </button>
          <button
            onClick={() => {
              console.log("eyess");
            }}
          >
            dsaasdf
          </button>
        </>
      );
    },
  },
  {
    field: "total_quantity",
    headerName: "Total Quantity",
    sortable: true,
    width: 110,
  },
];
export const partsTableConfig = { uniqueId: "serial" };

export const statusHeadings = [
  { name: "status_id", sortable: true },
  { name: "status_name", sortable: true },
  { name: "note", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const statusConfig = { uniqueId: "status_id" };

export const locationHeadings = [
  { name: "location_id", sortable: true },
  { name: "location_name", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const locationConfig = { uniqueId: "location_id" };

export const usersHeadings = [
  { name: "user_id", sortable: true },
  { name: "name", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const usersConfig = { uniqueId: "user_id" };

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
export const partsConfig = { uniqueId: "internal_part_number" };

export const partCategoryHeadings = [
  { name: "part_category_id", sortable: true },
  { name: "part_id", sortable: true },
  { name: "part_category_name", sortable: true },
  { name: "actions", sortable: false, type: "action" },
];
export const partCategoryConfig = { uniqueId: "part_id" };
